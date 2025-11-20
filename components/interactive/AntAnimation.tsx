'use client';

import { useEffect, useRef } from 'react';

interface Ant {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  groupId: number;
  isLeading: boolean; // 是否被影響過
  lastRepelTime: number; // 上次被排斥的時間
  repelCooldown: number; // 冷卻時間（毫秒）
}

interface AntGroup {
  id: number;
  ants: Ant[];
  speed: number;
  startTime: number;
  isActive: boolean;
}

export function AntAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const groupsRef = useRef<AntGroup[]>([]);
  const groupIdCounter = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 設定 Canvas 尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 鼠標移動事件
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 創建一組螞蟻
    const createAntGroup = () => {
      const groupId = groupIdCounter.current++;
      const antCount = 5 + Math.floor(Math.random() * 8); // 5-12 隻螞蟻
      const speed = 0.5 + Math.random() * 1; // 0.5-1.5 速度
      const ants: Ant[] = [];

      // 隨機起始位置（從四邊進入）
      const edge = Math.floor(Math.random() * 4); // 0:上 1:右 2:下 3:左
      let startX: number, startY: number, angle: number;

      switch (edge) {
        case 0: // 從上進入
          startX = Math.random() * canvas.width;
          startY = -50;
          angle = Math.PI / 2 + (Math.random() - 0.5) * 0.5; // 向下，略有偏移
          break;
        case 1: // 從右進入
          startX = canvas.width + 50;
          startY = Math.random() * canvas.height;
          angle = Math.PI + (Math.random() - 0.5) * 0.5; // 向左，略有偏移
          break;
        case 2: // 從下進入
          startX = Math.random() * canvas.width;
          startY = canvas.height + 50;
          angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.5; // 向上，略有偏移
          break;
        default: // 從左進入
          startX = -50;
          startY = Math.random() * canvas.height;
          angle = (Math.random() - 0.5) * 0.5; // 向右，略有偏移
      }

      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      // 創建排成一列的螞蟻（間距加大）
      for (let i = 0; i < antCount; i++) {
        const spacing = 25 + Math.random() * 10; // 螞蟻間距加大（原本 15-20，現在 25-35）
        ants.push({
          x: startX - vx * spacing * i,
          y: startY - vy * spacing * i,
          vx,
          vy,
          size: 3 + Math.random() * 2,
          angle,
          groupId,
          isLeading: false,
          lastRepelTime: 0,
          repelCooldown: 800, // 800ms 冷卻時間
        });
      }

      groupsRef.current.push({
        id: groupId,
        ants,
        speed,
        startTime: Date.now(),
        isActive: true,
      });
    };

    // 繪製螞蟻
    const drawAnt = (ant: Ant) => {
      ctx.save();
      ctx.translate(ant.x, ant.y);
      ctx.rotate(ant.angle);

      // 螞蟻的顏色（深棕色）
      ctx.fillStyle = 'rgba(60, 40, 30, 0.8)';

      // 身體（橢圓形）
      ctx.beginPath();
      ctx.ellipse(0, 0, ant.size * 1.2, ant.size * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();

      // 頭部（小圓）
      ctx.beginPath();
      ctx.arc(ant.size * 1.5, 0, ant.size * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // 腹部（橢圓形）
      ctx.beginPath();
      ctx.ellipse(-ant.size * 1.2, 0, ant.size * 1, ant.size * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();

      // 觸角
      ctx.strokeStyle = 'rgba(60, 40, 30, 0.8)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(ant.size * 1.5, 0);
      ctx.lineTo(ant.size * 2, -ant.size * 0.8);
      ctx.moveTo(ant.size * 1.5, 0);
      ctx.lineTo(ant.size * 2, ant.size * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    // 檢查螞蟻是否超出畫面
    const isOutOfBounds = (ant: Ant): boolean => {
      const margin = 100;
      return (
        ant.x < -margin ||
        ant.x > canvas.width + margin ||
        ant.y < -margin ||
        ant.y > canvas.height + margin
      );
    };

    // 更新螞蟻位置
    const updateAnts = () => {
      const mouse = mouseRef.current;
      const interactionRadius = 100; // 鼠標影響範圍
      const maxRepelForce = 4; // 最大排斥力強度（提高一點讓螞蟻能更快脫離）
      const currentTime = Date.now();

      groupsRef.current.forEach((group) => {
        if (!group.isActive) return;

        const antsToRemove: number[] = [];

        group.ants.forEach((ant, index) => {
          // 計算與鼠標的距離
          const dx = ant.x - mouse.x;
          const dy = ant.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // 檢查是否在冷卻時間內
          const isInCooldown = currentTime - ant.lastRepelTime < ant.repelCooldown;

          // 如果鼠標接近螞蟻且不在冷卻時間內
          if (distance < interactionRadius && mouse.x > -500 && distance > 0 && !isInCooldown) {
            // 計算排斥力（距離越近，推力越大）
            const distanceRatio = 1 - (distance / interactionRadius);
            const repelForce = maxRepelForce * distanceRatio * distanceRatio; // 平方關係

            // 只有當推力足夠大時才應用（避免邊緣微弱推力）
            if (repelForce > 0.5) {
              // 計算排斥方向（遠離鼠標）
              const repelAngle = Math.atan2(dy, dx);
              
              // 應用排斥力（覆蓋原有速度）
              ant.vx = Math.cos(repelAngle) * repelForce;
              ant.vy = Math.sin(repelAngle) * repelForce;
              ant.angle = repelAngle;
              ant.isLeading = true;
              ant.lastRepelTime = currentTime; // 記錄被排斥的時間
            }
          }

          // 更新位置
          ant.x += ant.vx;
          ant.y += ant.vy;

          // 減速效果（被排斥的螞蟻會逐漸恢復正常速度）
          if (ant.isLeading) {
            // 檢查是否已經脫離影響範圍
            const currentDistance = Math.sqrt(
              Math.pow(ant.x - mouse.x, 2) + Math.pow(ant.y - mouse.y, 2)
            );
            
            // 如果已經脫離影響範圍，加速恢復
            if (currentDistance > interactionRadius * 1.2) {
              ant.vx *= 0.95;
              ant.vy *= 0.95;
            } else {
              // 還在影響範圍附近，慢速減速
              ant.vx *= 0.98;
              ant.vy *= 0.98;
            }

            // 如果速度很小，恢復為正常爬行
            if (Math.abs(ant.vx) < 0.3 && Math.abs(ant.vy) < 0.3) {
              // 隨機新方向
              const randomAngle = Math.random() * Math.PI * 2;
              ant.vx = Math.cos(randomAngle) * group.speed;
              ant.vy = Math.sin(randomAngle) * group.speed;
              ant.angle = randomAngle;
              ant.isLeading = false;
            }
          }

          // 更新角度以匹配移動方向
          const speed = Math.sqrt(ant.vx * ant.vx + ant.vy * ant.vy);
          if (speed > 0.1) {
            ant.angle = Math.atan2(ant.vy, ant.vx);
          }

          // 檢查是否超出邊界
          if (isOutOfBounds(ant)) {
            antsToRemove.push(index);
          }
        });

        // 移除超出邊界的螞蟻（從後向前移除以避免索引問題）
        antsToRemove.reverse().forEach(index => {
          group.ants.splice(index, 1);
        });

        // 如果組內沒有螞蟻了，標記為不活躍
        if (group.ants.length === 0) {
          group.isActive = false;
        }
      });

      // 清理不活躍的組
      groupsRef.current = groupsRef.current.filter(group => group.isActive);
    };

    // 動畫循環
    let lastSpawnTime = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 隨機生成新的螞蟻組（頻率降低到 60%，即間隔變長）
      const now = Date.now();
      const spawnInterval = 5000 + Math.random() * 8000; // 5-13秒隨機生成（原本 3-8秒，延長約 1.67 倍）
      if (now - lastSpawnTime > spawnInterval && groupsRef.current.length < 3) {
        createAntGroup();
        lastSpawnTime = now;
      }

      // 更新並繪製所有螞蟻
      updateAnts();
      groupsRef.current.forEach((group) => {
        group.ants.forEach(drawAnt);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // 頁面可見性處理
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = undefined;
        }
      } else {
        if (!animationFrameRef.current) {
          lastSpawnTime = Date.now(); // 重置生成時間避免累積
          animate();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 初始生成一組螞蟻
    createAntGroup();
    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}


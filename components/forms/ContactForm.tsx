"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle2 } from "lucide-react";

// 聯絡方式選項
const contactMethods = [
  { value: "phone", label: "電話" },
  { value: "email", label: "Email" },
  { value: "line", label: "LINE ID" },
];

// 縣市列表
const cities = [
  "台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市",
  "基隆市", "新竹市", "新竹縣", "苗栗縣", "彰化縣", "南投縣",
  "雲林縣", "嘉義市", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣",
  "台東縣", "澎湖縣", "金門縣", "連江縣"
];

// 需求類型
const needsOptions = [
  "白蟻", "蟑螂", "老鼠", "蚊蠅", "塵蟎", "螞蟻", "跳蚤", "其他"
];

// 聯絡時段
const timeSlots = [
  { value: "morning", label: "早上 (09:00-12:00)" },
  { value: "afternoon", label: "下午 (13:00-18:00)" },
  { value: "evening", label: "晚上 (18:00-21:00)" },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod1: "phone",
    contactValue1: "",
    contactMethod2: "",
    contactValue2: "",
    city: "",
    needs: [] as string[],
    timeSlot: "",
    date: "",
    message: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 驗證表單
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "請輸入姓名（至少 2 個字元）";
    }

    if (!formData.contactValue1.trim()) {
      newErrors.contactValue1 = "請輸入聯絡方式";
    } else if (formData.contactMethod1 === "phone") {
      const phoneRegex = /^(09\d{8}|(\+886|886)?9\d{8})$/;
      if (!phoneRegex.test(formData.contactValue1.replace(/[-\s]/g, ""))) {
        newErrors.contactValue1 = "請輸入有效的電話號碼（例：0912-345-678）";
      }
    } else if (formData.contactMethod1 === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contactValue1)) {
        newErrors.contactValue1 = "請輸入有效的 Email 地址";
      }
    }

    if (!formData.city) {
      newErrors.city = "請選擇服務地區";
    }

    if (formData.needs.length === 0) {
      newErrors.needs = "請至少選擇一項需求";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "請同意隱私權政策與服務條款";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 處理提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 模擬 API 呼叫（實際使用時替換為真實 API）
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // TODO: 實際呼叫 API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setIsSuccess(true);
      // 重置表單
      setFormData({
        name: "",
        contactMethod1: "phone",
        contactValue1: "",
        contactMethod2: "",
        contactValue2: "",
        city: "",
        needs: [],
        timeSlot: "",
        date: "",
        message: "",
        agreeTerms: false,
      });
    } catch (error) {
      setErrors({ submit: "提交失敗，請稍後再試" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 處理需求選擇
  const handleNeedToggle = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-3">
          表單已成功送出！
        </h3>
        <p className="text-text-secondary mb-6">
          我們已收到您的諮詢，將在 24 小時內與您聯絡
        </p>
        <Button onClick={() => setIsSuccess(false)}>
          再次填寫表單
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 姓名 */}
      <div>
        <Label htmlFor="name" className="required">姓名</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="請輸入您的姓名"
          className={errors.name ? "border-error" : ""}
        />
        {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
      </div>

      {/* 聯絡方式 1 */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label htmlFor="contactMethod1" className="required">聯絡方式</Label>
          <Select
            value={formData.contactMethod1}
            onValueChange={(value) => setFormData({ ...formData, contactMethod1: value, contactValue1: "" })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {contactMethods.map((method) => (
                <SelectItem key={method.value} value={method.value}>
                  {method.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="contactValue1" className="required">
            {contactMethods.find((m) => m.value === formData.contactMethod1)?.label}
          </Label>
          <Input
            id="contactValue1"
            value={formData.contactValue1}
            onChange={(e) => setFormData({ ...formData, contactValue1: e.target.value })}
            placeholder={
              formData.contactMethod1 === "phone"
                ? "0912-345-678"
                : formData.contactMethod1 === "email"
                ? "example@email.com"
                : "LINE ID"
            }
            className={errors.contactValue1 ? "border-error" : ""}
          />
          {errors.contactValue1 && <p className="text-error text-sm mt-1">{errors.contactValue1}</p>}
        </div>
      </div>

      {/* 聯絡方式 2（選填） */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label htmlFor="contactMethod2">聯絡方式 2（選填）</Label>
          <Select
            value={formData.contactMethod2}
            onValueChange={(value) => setFormData({ ...formData, contactMethod2: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="選擇方式" />
            </SelectTrigger>
            <SelectContent>
              {contactMethods.map((method) => (
                <SelectItem key={method.value} value={method.value}>
                  {method.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="contactValue2">
            {formData.contactMethod2 ? contactMethods.find((m) => m.value === formData.contactMethod2)?.label : "聯絡資訊"}
          </Label>
          <Input
            id="contactValue2"
            value={formData.contactValue2}
            onChange={(e) => setFormData({ ...formData, contactValue2: e.target.value })}
            placeholder="選填"
            disabled={!formData.contactMethod2}
          />
        </div>
      </div>

      {/* 服務地區 */}
      <div>
        <Label htmlFor="city" className="required">服務地區</Label>
        <Select
          value={formData.city}
          onValueChange={(value) => setFormData({ ...formData, city: value })}
        >
          <SelectTrigger className={errors.city ? "border-error" : ""}>
            <SelectValue placeholder="請選擇縣市" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.city && <p className="text-error text-sm mt-1">{errors.city}</p>}
      </div>

      {/* 需求類型 */}
      <div>
        <Label className="required mb-3 block">需求類型（可複選）</Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {needsOptions.map((need) => (
            <label
              key={need}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Checkbox
                checked={formData.needs.includes(need)}
                onCheckedChange={() => handleNeedToggle(need)}
              />
              <span className="text-sm">{need}</span>
            </label>
          ))}
        </div>
        {errors.needs && <p className="text-error text-sm mt-2">{errors.needs}</p>}
      </div>

      {/* 希望聯絡時段 */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="timeSlot">希望聯絡時段（選填）</Label>
          <Select
            value={formData.timeSlot}
            onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="請選擇時段" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot.value} value={slot.value}>
                  {slot.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date">希望聯絡日期（選填）</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
      </div>

      {/* 內容說明 */}
      <div>
        <Label htmlFor="message">內容說明（選填）</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="請描述您遇到的害蟲問題，例如：出沒地點、數量、持續時間等"
          rows={4}
          maxLength={1000}
        />
        <p className="text-xs text-text-secondary mt-1">
          {formData.message.length} / 1000 字元
        </p>
      </div>

      {/* 同意條款 */}
      <div>
        <label className="flex items-start space-x-2 cursor-pointer">
          <Checkbox
            checked={formData.agreeTerms}
            onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
            className={errors.agreeTerms ? "border-error" : ""}
          />
          <span className="text-sm text-text-primary">
            我已閱讀並同意
            <a href="/privacy" target="_blank" className="text-primary hover:underline ml-1">
              隱私權政策與服務條款
            </a>
          </span>
        </label>
        {errors.agreeTerms && <p className="text-error text-sm mt-1">{errors.agreeTerms}</p>}
      </div>

      {/* 提交按鈕 */}
      <div>
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              送出中...
            </>
          ) : (
            "送出表單"
          )}
        </Button>
        {errors.submit && <p className="text-error text-sm mt-2 text-center">{errors.submit}</p>}
      </div>
    </form>
  );
}


import { useEffect, useState } from "react";
import { LockKeyhole, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ConsultationForm = () => {
  // Popup state
  const [isOpen, setIsOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    details: "",
  });

  // Open popup after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Consultation Enquiry:", formData);

    // API call here

    // Optional: close popup after submit
    // setIsOpen(false);
  };

  // Don't show popup until timer completes
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/60
        px-4
        py-6
        backdrop-blur-sm
      "
    >
      {/* Popup */}
      <div
        className="
          relative
          w-full
          max-w-[460px]
          animate-in
          fade-in
          zoom-in-95
          duration-300
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="
            absolute
            -right-2
            -top-2
            z-50
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#10264b]
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#d0a546]
            hover:scale-105
          "
          aria-label="Close consultation form"
        >
          <X size={19} />
        </button>

        {/* Form Container */}
        <div
          className="
            max-h-[90vh]
            w-full
            overflow-y-auto
            rounded-[28px]
            bg-[#f8f8f7]
            p-5
            shadow-2xl
            sm:p-7
          "
        >
          {/* Heading */}
          <div className="mb-6">
            <h2
              className="
                text-2xl
                font-bold
                text-[#10264b]
                sm:text-[26px]
              "
            >
              Get a Free Consultation
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Tell us about your construction requirements.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
              className="
                h-[55px]
                rounded-[20px]
                border-[#10264b]
                bg-white
                px-6
                text-[16px]
                text-[#10264b]
                placeholder:text-[#9aa6b8]
                focus-visible:ring-1
                focus-visible:ring-[#10264b]
              "
            />

            {/* Mobile */}
            <Input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              type="tel"
              placeholder="Mobile number *"
              required
              className="
                h-[55px]
                rounded-[20px]
                border-[#10264b]
                bg-white
                px-6
                text-[16px]
                text-[#10264b]
                placeholder:text-[#9aa6b8]
                focus-visible:ring-1
                focus-visible:ring-[#10264b]
              "
            />

            {/* Email */}
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address (optional)"
              className="
                h-[55px]
                rounded-[20px]
                border-[#10264b]
                bg-white
                px-6
                text-[16px]
                text-[#10264b]
                placeholder:text-[#9aa6b8]
                focus-visible:ring-1
                focus-visible:ring-[#10264b]
              "
            />

            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location *"
              required
              className="
    h-[55px]
    rounded-[20px]
    border-[#10264b]
    bg-white
    px-6
    text-[16px]
    text-[#10264b]
    placeholder:text-[#9aa6b8]
    focus-visible:ring-1
    focus-visible:ring-[#10264b]
  "
            />

            {/* Project Details */}
            <Textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Project details (optional)"
              className="
                min-h-[95px]
                resize-none
                rounded-[20px]
                border-[#10264b]
                bg-white
                px-6
                py-5
                text-[16px]
                text-[#10264b]
                placeholder:text-[#9aa6b8]
                focus-visible:ring-1
                focus-visible:ring-[#10264b]
              "
            />

            {/* Submit */}
            <Button
              type="submit"
              className="
                h-[55px]
                w-full
                rounded-[20px]
                bg-[#d0a546]
                text-[16px]
                font-bold
                text-white
                shadow-lg
                shadow-[#d0a546]/20
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#bd9438]
              "
            >
              LET'S BUILD YOUR DREAM
            </Button>

            {/* Security */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                text-sm
                text-[#d0a546]
              "
            >
              <LockKeyhole size={16} strokeWidth={1.8} />

              <span>Your information is secure.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;

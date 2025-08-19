"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, UserPlus } from "lucide-react"
import { AnimatedInput } from "@/components/animated-input"
import { AnimatedSubmitButton } from "@/components/animated-submit-button" // Import the new button
import "../styles/membership-form.css"

const departments = ["Electronics & Communication Engineering", "Computer Science & Engineering", "Electrical & Electronics Engineering", "Mechanical Engineering", "Civil Engineering", "Information Technology", "Other"]
const years = ["First Year", "Second Year", "Third Year", "Final Year", "Post Graduate"]

export function MembershipForm() {
  const [formData, setFormData] = useState({ name: "", email: "", year: "", department: "", ieeeNumber: "", motivation: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", year: "", department: "", ieeeNumber: "", motivation: "" })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <section className="membership-form-section">
        <div className="container">
          <div className="form-container">
            <Card className="submission-card">
              <CardContent className="submission-card__content">
                <div className="submission-card__icon-wrapper">
                  <div className="submission-card__icon-background">
                    <CheckCircle className="submission-card__icon" />
                  </div>
                </div>
                <h2 className="submission-card__title">Thank You!</h2>
                <p className="submission-card__text">
                  Your membership application has been successfully submitted. We'll review your application and get back to you within 3-5 business days.
                </p>
                <p className="submission-card__subtext">
                  You'll receive a confirmation email shortly with next steps and information about upcoming events.
                </p>
                <Button onClick={resetForm} variant="outline">
                  Submit Another Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="membership-form-section">
      <div className="container">
        <div className="form-container">
          <Card className="form-card">
            <CardHeader className="form-card__header">
              <div className="form-card__icon-wrapper">
                <div className="form-card__icon-background">
                  <UserPlus className="form-card__icon" />
                </div>
              </div>
              <CardTitle className="form-card__title">Membership Application</CardTitle>
              <p className="form-card__subtitle">Fill out the form below to join our IEEE joint chapter community.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="form">
                <div className="form__grid">
                  <AnimatedInput id="name" label="Full Name *" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                  <AnimatedInput id="email" label="Email Address *" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                </div>
                <div className="form__grid">
                  <div className="form__group">
                    <Label htmlFor="year" className="form__label">Year of Study *</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                      <SelectTrigger className="animated-select__trigger"><SelectValue placeholder="Select your year" /></SelectTrigger>
                      <SelectContent className="animated-select__content">{years.map((year) => <SelectItem key={year} value={year} className="animated-select__item">{year}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="form__group">
                    <Label htmlFor="department" className="form__label">Department *</Label>
                    <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                      <SelectTrigger className="animated-select__trigger"><SelectValue placeholder="Select your department" /></SelectTrigger>
                      <SelectContent className="animated-select__content">{departments.map((dept) => <SelectItem key={dept} value={dept} className="animated-select__item">{dept}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
                <AnimatedInput id="ieeeNumber" label="IEEE Membership Number (Optional)" value={formData.ieeeNumber} onChange={(e) => handleInputChange("ieeeNumber", e.target.value)} />
                <p className="form__helper-text">Don't have an IEEE membership? No problem! You can apply for one after joining our chapter.</p>
                <div className="form__group">
                  <Label htmlFor="motivation" className="form__label">Why do you want to join? (Optional)</Label>
                  <Textarea id="motivation" placeholder="Tell us about your interests and what you hope to gain..." value={formData.motivation} onChange={(e) => handleInputChange("motivation", e.target.value)} rows={4} className="form__input" />
                </div>
                
                {/* --- REPLACE OLD BUTTON WITH NEW ONE --- */}
                <div className="form__submit-wrapper">
                  <AnimatedSubmitButton
                    isSubmitting={isSubmitting}
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.year || !formData.department}
                  />
                </div>
                
                <p className="form__footer-text">
                  By submitting this form, you agree to receive communications from IEEE SSCS/SPS/PHO/MTTS Joint Chapter CEK.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

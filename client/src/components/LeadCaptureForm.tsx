import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Remove mock functionality - Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: 'Thank you for reaching out!',
      description: "We'll be in touch within 24 hours.",
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="glass-card p-12 text-center space-y-4 animate-in fade-in duration-500" data-testid="form-success">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for your interest. We'll review your information and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 glow-primary" data-testid="form-lead-capture">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary"
          data-testid="input-name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john@example.com"
          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary"
          data-testid="input-email"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(555) 123-4567"
          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary"
          data-testid="input-phone"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          How can we help?
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your business and what you're looking to achieve with AI..."
          rows={4}
          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary resize-none"
          data-testid="input-message"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-lg py-6 glow-primary"
        data-testid="button-submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Get Started Today'
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          We'll never sell your information
        </span>
      </p>
    </form>
  );
}

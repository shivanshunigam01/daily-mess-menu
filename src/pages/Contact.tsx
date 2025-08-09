import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Contact message", data);
    toast({ title: "Message sent", description: "We will get back to you soon." });
    reset();
  };

  return (
    <main className="container py-8">
      <Helmet>
        <title>Contact The Daily Plate</title>
        <meta name="description" content="Contact The Daily Plate team. We'd love to hear your feedback and suggestions." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <h1 className="text-3xl font-heading font-semibold mb-6">Contact Us</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <Input placeholder="Name" {...register("name")} />
          <Input placeholder="Email" type="email" {...register("email")} />
          <Textarea placeholder="Message" rows={6} {...register("message")} />
          <Button type="submit">Send Message</Button>
        </form>
        <div>
          <div className="rounded-xl overflow-hidden border aspect-video">
            <iframe
              title="The Daily Plate Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31536.14622721448!2d77.585!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z12.97NIDc3LjU4NUU!5e0!3m2!1sen!2sin!4v1616161616161"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Email: hello@dailyplate.app</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

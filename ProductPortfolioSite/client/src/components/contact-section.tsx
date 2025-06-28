import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Create email with contact details
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    // Open email client with pre-filled information
    window.location.href = `mailto:yahia.hassan@email.com?subject=${emailSubject}&body=${emailBody}`;
    
    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    form.reset();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral to-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to discuss your next product challenge or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-secondary mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Email</h4>
                  <p className="text-gray-600">yahia.hassan@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaLinkedin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">LinkedIn</h4>
                  <p className="text-gray-600">linkedin.com/in/yahiahassan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-secondary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/yahiahassan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com/yahiahassan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/yahiahassan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 fade-in">
            <h3 className="text-xl font-bold text-secondary mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="What's this about?" 
                          {...field}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Tell me about your project or how I can help..." 
                          {...field}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

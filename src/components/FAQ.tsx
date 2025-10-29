import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

const FAQ = ({ items, title = "Frequently Asked Questions", description }: FAQProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-card-gradient rounded-xl border border-border/20 px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-left hover:no-underline py-6">
              <span className="font-heading font-semibold pr-4">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 pt-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

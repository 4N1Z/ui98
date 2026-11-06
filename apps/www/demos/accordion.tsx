import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui98"

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["faq-1"]} className="w-full max-w-md">
      <AccordionItem value="faq-1">
        <AccordionTrigger>How do I sign your guestbook?</AccordionTrigger>
        <AccordionContent>
          Scroll to the bottom of my homepage and click the animated quill.
          Please be nice, my mom reads it too.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>
          Why is this page under construction?
        </AccordionTrigger>
        <AccordionContent>
          Every great homepage is under construction. Check back after I finish
          learning frames.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>What browser should I use?</AccordionTrigger>
        <AccordionContent>
          Best viewed in Netscape Navigator 4.0 at 800x600 with 256 colors.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

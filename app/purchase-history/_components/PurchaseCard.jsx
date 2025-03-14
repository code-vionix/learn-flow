import { PurchesAccordion, PurchesAccordionContent, PurchesAccordionItem, PurchesAccordionTrigger } from "@/components/ui/purchesAccordion";

const PurchaseCard = () => {
    return (
        <div>
            <PurchesAccordion type="single" collapsible>
                <PurchesAccordionItem value="item-1">
                    <PurchesAccordionTrigger>
                        <div className="text-start">
                            sdkhlskjfdhaslkfa sdkmfn a.skdf jkashdkfhfaskjdhfalksjdhfalsdd l9orem
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas voluptatibus laudantium quis consectetur vel esse aperiam aliquid neque dolorum, provident consequuntur molestias! Voluptatum consectetur harum corrupti optio nemo distinctio? loe Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, atque rerum! Mollitia et aliquid voluptatibus qui dignissimos autem itaque accusamus magnam. Corrupti iusto natus officiis cum quo, neque facere eos?
                        </div>
                    </PurchesAccordionTrigger>
                    <PurchesAccordionContent>
                        Content for section 1
                    </PurchesAccordionContent>
                </PurchesAccordionItem>
                <PurchesAccordionItem value="item-2">
                    <PurchesAccordionTrigger>Section 2</PurchesAccordionTrigger>
                    <PurchesAccordionContent>
                        Content for section 2
                    </PurchesAccordionContent>
                </PurchesAccordionItem>
            </PurchesAccordion>
        </div>
    );
};

export default PurchaseCard;
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const patientQuestions = [
  {
    question: "What is this test?",
    answer:
      'It\'s a new type of blood test, often called a "liquid biopsy," that can find the earliest signs of cancer from a single tube of blood. It\'s designed to be simple for you and powerful for your doctor.',
  },
  {
    question: "What does it mean for me?",
    answer:
      "Early detection saves lives. By finding cancer sooner, this test can provide peace of mind or give your care team a critical head start in planning the most effective treatment for you.",
  },
  {
    question: "Why is it different?",
    answer:
      "Our test uses groundbreaking technology to look at your DNA in a completely new way. It can see tiny signals that other tests miss, giving us the best possible chance to find cancer early, when it's most treatable.",
  },
  {
    question: "How do I get the test?",
    answer:
      "The AAGAMISEQ test is ordered by your doctor. If you think you might be a candidate for early cancer screening, talk to your doctor about whether our test is right for you.",
  },
];

export default function PatientsSection() {
  return (
    <section id="patients" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Information and Hope, Delivered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We designed our test to be a powerful new tool in the fight against cancer,
            providing clear insights for both families and their trusted doctors.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">For Patients & Families</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patientQuestions.map((item, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  {item.question}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

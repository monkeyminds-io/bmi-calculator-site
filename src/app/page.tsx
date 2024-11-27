// =============================================================================
// File Name: Home Page
// File Description:
// This file contains the Home Page.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import Image from "next/image";
import { Section } from "@/libs/ui/section";
import { Container } from "@/libs/ui/container";
import { Heading } from "@/libs/ui/atoms/heading";
import { HeroBG } from "@/libs/ui/hero-bg";
import { BMIForm } from "@/libs/ui/bmi-form";

// =============================================================================
// Images Imports
// =============================================================================
import iconAge from "@/../public/icon-age.svg";
import iconEating from "@/../public/icon-eating.svg";
import iconExcercise from "@/../public/icon-exercise.svg";
import iconGender from "@/../public/icon-gender.svg";
import iconMuscle from "@/../public/icon-muscle.svg";
import iconPregnancy from "@/../public/icon-pregnancy.svg";
import iconRace from "@/../public/icon-race.svg";
import iconSleep from "@/../public/icon-sleep.svg";
import imageManEating from "@/../public/image-man-eating.webp";
import logo from "@/../public/logo.svg";
import patternLeft from "@/../public/pattern-curved-line-left.svg";
import patternRight from "@/../public/pattern-curved-line-right.svg";
import { ResultCard } from "@/libs/ui/result-card";

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Component
// =============================================================================
export default function HomePage() {
  return (
    <main>
      <Section type={"hero"}>
        <HeroBG />
        <Container>
          <div className="flex flex-col items-center gap-6">
            <Image src={logo} alt="BMI Calculator logo" className="w-10 h-10" />
            <div className="flex flex-col gap-6 text-center">
              <Heading level={1} text={"Body Mass Index Calculator"} />
              <p className="text-gray text-body-m">
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <BMIForm />
        </Container>
      </Section>

      <Section type="result">
        <Image src={patternLeft} alt="decoration" className="hidden" />
        <Container type="result-content">
          <Image
            src={imageManEating}
            alt="Man eating sushi."
            className="max-w-none w-screen"
          />
          <div className="flex flex-col gap-8">
            <Heading level={2} text={"What your BMI result means"} />
            <p className="text-gray">
              A BMI range of 18.5 to 24.9 is considered a &apos;healthy
              weight.&apos; Maintaining a healthy weight may lower your chances
              of experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </Container>
        <Container type="result-cards">
          <ResultCard
            icon={iconEating}
            iconAlt={"Icon eating"}
            title={"Healthy eating"}
            text={
              "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
            }
          />
          <ResultCard
            icon={iconExcercise}
            iconAlt={"Icon excercise"}
            title={"Regular exercise"}
            text={
              "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
            }
          />
          <ResultCard
            icon={iconSleep}
            iconAlt={"Icon sleep"}
            title={"Adequate sleep"}
            text={
              "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
            }
          />
        </Container>
      </Section>

      <Section>
        <Image src={patternRight} alt="decoration" className="hidden" />
        <Container>
          <div>
            <Heading level={2} text={"Limitations of BMI"} />
            <p>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div>
            <div>
              <div>
                <Image src={iconGender} alt="Icon gender" />
                <h3>Gender</h3>
              </div>
              <p>
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child&apos;s age and gender are
                considered when evaluating their BMI.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconAge} alt="Icon age" />
                <h3>Age</h3>
              </div>
              <p>
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconMuscle} alt="Icon muscle" />
                <h3>Muscle</h3>
              </div>
              <p>
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn&apos;t differentiate muscle from fat.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconPregnancy} alt="Icon pregnancy" />
                <h3>Pregnancy</h3>
              </div>
              <p>
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconRace} alt="Icon race" />
                <h3>Race</h3>
              </div>
              <p>
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

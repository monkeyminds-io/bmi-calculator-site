// =============================================================================
// File Name: Home Page
// File Description:
// This file contains the Home Page.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import Image from "next/image";

// =============================================================================
// Images Imports
// =============================================================================
import iconAge from '@/../public/icon-age.svg'
import iconEating from '@/../public/icon-eating.svg'
import iconExcercise from '@/../public/icon-exercise.svg'
import iconGender from '@/../public/icon-gender.svg'
import iconMuscle from '@/../public/icon-muscle.svg'
import iconPregnancy from '@/../public/icon-pregnancy.svg'
import iconRace from '@/../public/icon-race.svg'
import iconSleep from '@/../public/icon-sleep.svg'
import imageManEating from '@/../public/image-man-eating.webp'
import logo from '@/../public/logo.svg'
import patternLeft from '@/../public/pattern-curved-line-left.svg'
import patternRight from '@/../public/pattern-curved-line-right.svg'

// =============================================================================
// Page Props
// =============================================================================


// =============================================================================
// Page Component
// =============================================================================
export default function HomePage () {
  return (
    <main>
      <section>
        <div>
          <div>
            <Image src={logo} alt="BMI Calculator logo" />
            <h1>Body Mass Index Calculator</h1>
            <p>
              Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
            </p>
          </div>
          <form action="">
            <h2>Enter your details below</h2>
            <div>
              <label htmlFor="metric-unit">
                <input type="radio" id='metric-unit' name='unit-type' />
                Metric
              </label>
              <label htmlFor="imperial-unit">
                <input type="radio" id='imperial-unit' name='unit-type' />
                Imperial
              </label>
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <div>
                <input type="number" id='height' name='height' placeholder='Add your height here' />
                <span>cm</span>
              </div>
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <div>
                <input type="number" id='weight' name='weight' placeholder='Add your weight here' />
                <span>kg</span>
              </div>
            </div>
            <div>
              <p>Your BMI is...</p>
              {/* add score  */}
              <span>23.4</span>
              <p>
                Your BMI suggests you&apos;re {/*  add classification */}. Your ideal weight is between {/*  add range */}.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section>
        <Image src={patternLeft} alt="decoration" />
        <div>
          <div>
            <Image src={imageManEating} alt="Man eating sushi." />
            <div>
              <h2>What your BMI result means</h2>
              <p>
                A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={iconEating} alt="Icon eating" />
              <div>
                <h3>Healthy eating</h3>
                <p>
                  Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>
            <div>
              <Image src={iconExcercise} alt="Icon excercise" />
              <div>
                <h3>Regular exercise</h3>
                <p>
                  Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>
            <div>
              <Image src={iconSleep} alt="Icon sleep" />
              <div>
                <h3>Adequate sleep</h3>
                <p>
                  Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Image src={patternRight} alt="decoration" />
        <div>
          <div>
            <h2>Limitations of BMI</h2>
            <p>
              Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
            </p>
          </div>
          <div>
            <div>
              <div>
                <Image src={iconGender} alt="Icon gender" />
                <h3>Gender</h3>
              </div>
              <p>
                The development and body fat composition of girls and boys vary with age. Consequently, a child&apos;s age and gender are considered when evaluating their BMI.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconAge} alt="Icon age" />
                <h3>Age</h3>
              </div>
              <p>
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconMuscle} alt="Icon muscle" />
                <h3>Muscle</h3>
              </div>
              <p>
                BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos;t differentiate muscle from fat.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconPregnancy} alt="Icon pregnancy" />
                <h3>Pregnancy</h3>
              </div>
              <p>
                Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
              </p>
            </div>
            <div>
              <div>
                <Image src={iconRace} alt="Icon race" />
                <h3>Race</h3>
              </div>
              <p>
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
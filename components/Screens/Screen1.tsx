import Image from 'next/image';
import Link from 'next/link';

export default function Screen1(props: Props) {
  return (
    <>
      <section className="mainSection">
        <div className="container">
          <div className="columnWrap">
            <div>
              <Image
                src="/../public/assets/graphics/complex.png"
                alt=""
                width="284"
                height="220"
              />
            </div>
            <div className="column">
              <p>
                Some decision can be quite hard to make. Especialy, when the
                situation is complex and goals and ressources seem to be in
                conflict with each other. <br />
                <br />
                Easy Decide helps you in having a clearer view by breaking down
                you main decion question in smaler parts, which are then
                compared to each other. <br />
                <br />
                You can compare not only between two, but up to six decion
                elements. For example: Should I keep my current job, go for
                another employment or start freelancing?{' '}
                <Link href="">See more examples</Link>
                <br />
                <br />
                At the end you will have a result towards which decision you
                tend and how strongly. According to your answers you will also
                see how consistend you were in answering the questions. <br />
                Bring some time! On average a test takes between 15 - 40
                minutes.
              </p>
              <div className="flexRowWrap">
                <div
                  className="mainButton button1"
                  onClick={() => {
                    props.setScreen(2);
                  }}
                >
                  start
                </div>
                <Link href="" className="mainButton button2">
                  explore some examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

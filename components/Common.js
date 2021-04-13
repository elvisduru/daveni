import tw, { css, styled } from 'twin.macro'

export const Section = tw.section`px-5 py-12 md:(px-32 py-16)`
export const Heading2 = tw.h2`font-serif mt-0 mb-3 text-xl md:text-4xl font-semibold`

export const Heading3 = tw.h2`mt-3 mb-2 text-lg md:text-2xl font-semibold`
export const PageHeader = styled.div(({ image = 'citizen-header' }) => [
  tw`flex flex-col justify-center px-6 h-60 md:(px-32 h-80) text-white bg-cover bg-center bg-no-repeat`,
  `background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url(/images/${image}.jpg);`,
])

export const ProgramHero = styled.section(({ image = 'vanuatu' }) => [
  tw`flex flex-col justify-center px-10 text-white bg-cover bg-center bg-no-repeat`,
  `
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url(/images/${image}.jpg);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);

    @media (min-width: 500px) {
      height: calc(100vh - 400px);
      padding: 0;
    }

    @media (min-width: 1000px) {
      height: 100vh;
    }
  `,
])

export const ProgramHeading = tw.h1`font-serif text-5xl font-bold relative after:(content block w-20 md:w-full h-0.5 absolute bg-white -bottom-3)`

export const ProgramLeading = tw.p`mt-10`

export const ProgramStats = tw(({ className, stats }) => (
  <div className={className}>
    {stats.map(({ icon, title, value }, i) => (
      <div
        key={i}
        tw="flex flex-col leading-tight items-center text-center border border-white border-opacity-20 p-2 bg-fixed bg-opacity-20 rounded-sm text-sm hover:text-primary"
      >
        <img tw="w-10 mb-3" src={icon} alt={title} />
        <p>{value}</p>
      </div>
    ))}
  </div>
))`grid grid-cols-2 gap-2 md:grid-cols-5 lg:(mx-auto width[70vw]) bg-black bg-opacity-25 p-3 mt-auto`

export const ProgramQuote = tw.div`text-black text-opacity-80 text-sm border-l-4 border-primary rounded pl-2 my-6`

const svgStyles = css`
  position: relative;
  min-width: 60%;
  max-width: 100%;
  height: 40rem;
  & svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 500px) {
    min-width: 100vw;
    height: 20rem;
  }
`

export const Blobs = () => (
  <div css={svgStyles}>
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      className="blobSvg"
    >
      <path
        className="blob"
        d="M428.5,350.5Q366,451,248.5,453.5Q131,456,92,353Q53,250,89,142Q125,34,238,54.5Q351,75,421,162.5Q491,250,428.5,350.5Z"
        fill="#FFAD74"
      ></path>
    </svg>
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      className="blobSvg"
    >
      <path
        className="blob"
        d="M430,357Q373,464,254.5,455.5Q136,447,95.5,348.5Q55,250,96.5,153.5Q138,57,247,61.5Q356,66,421.5,158Q487,250,430,357Z"
        fill="#FF9C69"
      ></path>
    </svg>
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      className="blobSvg"
    >
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width="500"
          height="500"
        >
          <image
            href="/images/man-sunset.jpg"
            x="-100"
            y="0"
            width="650"
            height="500"
          />
        </pattern>
      </defs>
      <path
        className="blob"
        d="M431.5,357Q374,464,257,452.5Q140,441,78,345.5Q16,250,92.5,180Q169,110,255.5,100Q342,90,415.5,170Q489,250,431.5,357Z"
        fill="url(#img1)"
      ></path>
    </svg>
  </div>
)

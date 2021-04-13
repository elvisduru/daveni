import { Blobs, Section } from '../Common'
import tw, { css } from 'twin.macro'

const PartnerItem = tw.div`hover:shadow-md p-4 cursor-default`
const PartnerHeading = tw.h4`font-semibold mb-2 text-lg`

const partnerList = [
  {
    title: 'High Net Worth Investors',
    desc:
      'Daveni empowers high net worth individuals and families to become global citizens by investing in a second residence or citizenship and helps transform their dreams into reality through highly personalized products and services.',
  },
  {
    title: 'Certified Partners',
    desc:
      "Daveni endows its Certified Partner network with tools, services and training to deliver the best possible experience to clients seeking to invest in second residence or citizenship. Arton's partners are able to advise clients on virtually any matter in any jurisdiction around the world.",
  },
  {
    title: 'Government Agencies',
    desc:
      'Daveni enables government agencies as trusted partners in designing, developing, implementing and running investor programs for residence and citizenship to help boost foreign investments in their countries',
  },
]

export default function Partners() {
  return (
    <Section tw="flex flex-col justify-between items-center md:flex-row">
      <div>
        <h2 tw="font-semibold font-serif text-3xl pl-4">
          Join Our Global Network
        </h2>
        <hr tw="border-2 border-primary mt-2 mb-6 w-16 ml-4" />
        {partnerList.map((item, i) => (
          <PartnerItem
            css={`
              &:hover h4 {
                color: #ecaa2c;
              }
            `}
            key={i}
          >
            <PartnerHeading>{item.title}</PartnerHeading>
            <p>{item.desc}</p>
          </PartnerItem>
        ))}
      </div>
      <Blobs />
    </Section>
  )
}

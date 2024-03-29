import Link from 'next/link'
import { useState } from 'react'
import 'twin.macro'

const Input = ({
  label,
  type,
  value,
  name,
  required,
  handleInput,
  className,
  options,
}) =>
  type === 'radio' ? (
    <div className={className} tw="flex flex-col text-xs">
      <p tw="mb-2 uppercase">*I have a minimum of USD$130,000 to invest.</p>
      {options.map((option, i) => (
        <label key={i} className={className} tw="text-base">
          <input
            type="radio"
            name={name}
            value={option}
            onChange={handleInput}
          />{' '}
          {option}
        </label>
      ))}
    </div>
  ) : (
    <label className={className} tw="text-xs flex flex-col">
      {label}
      {type === 'select' ? (
        <select
          tw="outline-none border-b border-black border-opacity-40 hocus:border-opacity-100 bg-transparent text-base p-2 mt-1"
          name={name}
          onChange={handleInput}
          value={value}
        >
          <option value="">-Choose option-</option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          tw="outline-none border-b border-black border-opacity-40 hocus:border-opacity-100 bg-transparent text-base p-2"
          type={type}
          value={value}
          name={name}
          onChange={handleInput}
          required={required}
        />
      )}
    </label>
  )

export default function ContactForm() {
  const [fields, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    methodOfAppointment: '',
    date: '',
    heardAboutUs: '',
    canInvest: '',
  })

  const handleInput = e => {
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div tw="grid lg:grid-cols-3 background-color[#f4f0df] rounded-tl-3xl rounded-bl-sm rounded-br-3xl shadow-2xl">
      <form
        action="https://formsubmit.co/e68251fb9e339670b0429f72ae2883fc"
        method="POST"
        tw="rounded-tl-3xl rounded-bl-sm col-span-2 grid grid-cols-2 gap-5 py-5 px-10"
      >
        <p tw="font-semibold col-span-2">Please fill this form</p>
        <Input
          tw="col-span-2 md:col-span-1"
          label="FIRST NAME"
          type="text"
          value={fields.fname}
          name="fname"
          required
          handleInput={handleInput}
        />
        <Input
          tw="col-span-2 md:col-span-1"
          label="LAST NAME"
          type="text"
          value={fields.lname}
          name="lname"
          required
          handleInput={handleInput}
        />
        <Input
          tw="col-span-2"
          label="EMAIL ADDRESS"
          type="email"
          value={fields.email}
          name="email"
          required
          handleInput={handleInput}
        />
        <Input
          tw="col-span-2"
          label="PHONE NUMBER"
          type="phone"
          value={fields.phone}
          name="phone"
          required
          handleInput={handleInput}
        />
        <Input
          tw="col-span-2"
          label="PREFERRED METHOD OF APPOINTMENT"
          type="select"
          value={fields.methodOfAppointment}
          options={['Phone Call', 'Zoom Call', 'Physical Meeting']}
          name="methodOfAppointment"
          required
          handleInput={handleInput}
        />
        <Input
          tw="col-span-2"
          label="HOW DID YOU HEAR ABOUT US?"
          type="select"
          value={fields.heardAboutUs}
          options={['Google', 'Facebook', 'Instagram', 'Friend/Colleague']}
          name="heardAboutUs"
          required
          handleInput={handleInput}
        />
        <Input
          tw="col-span-2"
          label="I have a minimum of USD$130,000 to invest.
          "
          type="radio"
          value={fields.canInvest}
          options={['Yes', 'No']}
          name="canInvest"
          required
          handleInput={handleInput}
        />
        <textarea style={{ display: 'none' }} name="_autoresponse">
          Thanks for being awesome! We have received your message and would like
          to thank you for writing to us. If your inquiry is urgent, please use
          the telephone numbers listed below to talk to one of our senior
          consultants. +234 808 579 9962, +234 913 105 6660. Otherwise, we will
          reply you by email as soon as possible. Regards, Admin, Daveni
          Partners.
        </textarea>
        <button
          tw="col-span-2 place-self-start bg-primary px-5 py-2 rounded-tr-xl rounded-bl-xl uppercase text-sm font-semibold hocus:text-white mt-5"
          type="submit"
        >
          Schedule Appointment
        </button>
      </form>
      <div tw="bg-primary py-5 px-10 rounded-br-3xl relative overflow-hidden col-span-3 lg:col-span-1">
        <div tw="absolute w-48 h-48 rounded-full border-8 border-white border-opacity-25 -bottom-5 -right-10"></div>
        <p tw="font-semibold">Contact Info</p>
        <ul
          css={`
            display: flex;
            flex-direction: column;
            margin-top: 4rem;
            & li {
              margin-bottom: 10px;
            }
            & li a img {
              width: 20px;
              margin-right: 10px;
            }

            & li a {
              display: flex;
              align-items: flex-start;
            }
          `}
        >
          <li>
            <a href="tel:+2348085799962">
              <img src="/images/phone-call.svg" alt="Phone call" />
              (234) 808-579-9962
            </a>
          </li>
          <li tw="ml-8">
            <h4>Office Landline:</h4>
            <a href="tel:+2349134015389">(234) 913-401-5389</a>
          </li>
          <li tw="ml-8">
            <h4>Office Mobile:</h4>
            <a href="tel:+2349131056660">(234) 913-105-6660</a>
          </li>
          <li>
            <a href="mailto:hello@davenipartners.com">
              <img src="/images/email.svg" alt="Email" />
              hello@davenipartners.com
            </a>
          </li>
          <li>
            <Link href="/">
              <a>
                <img src="/images/pin.svg" alt="Address" />
                3 Gbemi Oluwa Close,<br /> Off Sule Abuka Crescent
              <br /> Off Opebi Road, Ikeja <br />
              Lagos.
              </a>
            </Link>
          </li>
        </ul>
        <ul
          css={`
            display: flex;
            margin-top: 4rem;
            & li {
              width: 30px;
              margin-right: 20px;
            }
          `}
        >
          <li>
            <a href="https://facebook.com/davenipartners">
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/davenipartners">
              <img src="/images/twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/davenipartners">
              <img src="/images/instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/davenipartners">
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

import { MdEmail } from 'react-icons/md'
import { FaPhoneSquare, FaMapMarkerAlt } from 'react-icons/fa'

const contacts = [
  {
    id: '1',
    iconSvg: <MdEmail />,
    title: 'Email',
    contact: 'dossantosdevoficial@gmail.com',
  },
  {
    id: '2',
    iconSvg: <FaPhoneSquare />,
    title: 'Telefone',
    contact: '(11) 91645-3897',
  },
  {
    id: '3',
    iconSvg: <FaMapMarkerAlt />,
    title: 'Endereço',
    contact: 'Itupeva-SP',
  },
]

export function InformationContainer() {
  return (
    <section className="flex w-full flex-col items-start justify-start  gap-5 ">
      <div className="flex w-full flex-col justify-start gap-4 rounded-sm">
        {contacts.map((item) => (
          <div
            key={item.id}
            className="flex w-full justify-start gap-4 rounded-sm"
          >
            <i className="mt-1 text-purple-600">{item.iconSvg} </i>
            <div className="flex flex-col gap-1 text-zinc-50">
              <h3 className="font-bold">{item.title} </h3>
              <p className="text-sm font-light">{item.contact} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

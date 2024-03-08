import { companyLogos } from "../constants";

export const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="taglinemb-6 text-center text-n-1/50">
        Helping people create beautiful content at:
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={38} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

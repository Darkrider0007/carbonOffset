import React from "react";
import ReactCountryFlag from "react-country-flag";

interface CountryFlagProps {
  countryName: string;
  size?: string;
  className?: string; // Added optional className prop
}

const getCountryCode = (countryName: string): string => {
  const countryCodeMap: { [key: string]: string } = {
    USA: "US",
    "United States": "US",
    Canada: "CA",
    India: "IN",
    Australia: "AU",
    Germany: "DE",
    "United Kingdom": "GB",
    France: "FR",
    Japan: "JP",
    China: "CN",
    Brazil: "BR",
    Russia: "RU",
    "South Africa": "ZA",
    Italy: "IT",
    Spain: "ES",
    Mexico: "MX",
    Argentina: "AR",
    Turkey: "TR",
    Netherlands: "NL",
    "South Korea": "KR",
    "Saudi Arabia": "SA",
    Indonesia: "ID",
    Switzerland: "CH",
    Sweden: "SE",
    Norway: "NO",
    Belgium: "BE",
    Denmark: "DK",
    Finland: "FI",
    "New Zealand": "NZ",
    Singapore: "SG",
    Malaysia: "MY",
    Thailand: "TH",
    Vietnam: "VN",
    Philippines: "PH",
    Nigeria: "NG",
    Egypt: "EG",
    Kenya: "KE",
    Israel: "IL",
    "United Arab Emirates": "AE",
    Qatar: "QA",
    Pakistan: "PK",
    Bangladesh: "BD",
    "Sri Lanka": "LK",
    Nepal: "NP",
    Iran: "IR",
    Iraq: "IQ",
    Afghanistan: "AF",
    Ukraine: "UA",
    Poland: "PL",
    Portugal: "PT",
    Greece: "GR",
    "Czech Republic": "CZ",
    Hungary: "HU",
    Austria: "AT",
    Ireland: "IE",
    Iceland: "IS",
    Luxembourg: "LU",
    Chile: "CL",
    Colombia: "CO",
    Peru: "PE",
    Venezuela: "VE",
    Ecuador: "EC",
    Bolivia: "BO",
    Uruguay: "UY",
    Paraguay: "PY",
    "Costa Rica": "CR",
    Panama: "PA",
    Cuba: "CU",
    "Dominican Republic": "DO",
    Haiti: "HT",
    Jamaica: "JM",
    "Trinidad and Tobago": "TT",
    Morocco: "MA",
    Algeria: "DZ",
    Tunisia: "TN",
    Libya: "LY",
    Ethiopia: "ET",
    Tanzania: "TZ",
    Uganda: "UG",
    Zambia: "ZM",
    Zimbabwe: "ZW",
    Mozambique: "MZ",
    Botswana: "BW",
    Namibia: "NA",
    Angola: "AO",
    Ghana: "GH",
    "Ivory Coast": "CI",
    Senegal: "SN",
    Cameroon: "CM",
    Sudan: "SD",
    "Democratic Republic of the Congo": "CD",
    Kazakhstan: "KZ",
    Uzbekistan: "UZ",
    Turkmenistan: "TM",
    Azerbaijan: "AZ",
    Armenia: "AM",
    Georgia: "GE",
    Mongolia: "MN",
    Myanmar: "MM",
    Cambodia: "KH",
    Laos: "LA",
    "North Korea": "KP",
    Bhutan: "BT",
    Maldives: "MV",
    Seychelles: "SC",
    Fiji: "FJ",
    "Papua New Guinea": "PG",
    "Solomon Islands": "SB",
    Vanuatu: "VU",
    Samoa: "WS",
    Tonga: "TO",
    Micronesia: "FM",
    Palau: "PW",
    "Marshall Islands": "MH",
    Nauru: "NR",
    Kiribati: "KI",
  };

  return countryCodeMap[countryName] || "UN"; // Return UN flag as fallback
};

const CountryFlag: React.FC<CountryFlagProps> = ({
  countryName,
  size = "1.5em",
  className = "", // Default empty string for className
}) => {
  const countryCode = getCountryCode(countryName);

  return (
    <span className={className}>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          fontSize: size,
          lineHeight: size,
        }}
        title={countryName}
      />
    </span>
  );
};

export default CountryFlag;

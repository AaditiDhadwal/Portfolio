import React from "react"

import contact from "../images/contact.svg"

import { ContactInfo, SocialInfo } from "../constants/index"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mx-0">
          <div className="col-md-6 text-center">
            <img
              src={contact}
              alt="contact"
              className="img-fluid contact-img"
            />
          </div>
          <div className="col-md-3">
            <table className="table table-responsive-xs text-white">
              <tbody>
                {ContactInfo.map(item => (
                  <tr key={item.label}>
                    <td>
                      <img src={item.img} alt="email" className="img-fluid" />
                      <br></br>
                      {item.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3 social-icons mb-4">
            {SocialInfo.map(item => (
              <a href={item.link} target="_blank">
                <img src={item.img} alt={item.label} className="img-fluid" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

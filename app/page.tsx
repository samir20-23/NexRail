
import "./styles/main.sass"
import "./styles/main.css"
import styled from "styled-components";


export default function Home() {
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="muneBtn">
            <button>Network</button>
            <button>Technology</button>
            <button>Experience</button>
          </div>
          <div className="logo-box">
            <svg viewBox="0 0 2686 326" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2685.5 0H590.5L590.5 19.5L590.5 171.891L590.5 189.5L600 315.5L674.536 326H755.702H2069.89L2101.02 323.036L2120.07 320.073L2158.19 308.218L2201.74 290.436L2220.8 278.582L2239.85 266.727L2265 248L2304 215.5L2379.5 154.5L2449 101L2496 64.5L2528 44L2553 30.5L2571.5 21.5L2594.5 13.5L2620 7L2640.5 3.5L2664.5 1.5L2685.5 0Z" fill="white" />
              <path d="M0 0H2095L2095 19.5L2095 171.891L2095 189.5L2103 317L2010.96 326H1929.8H615.611L584.483 323.036L565.427 320.073L527.315 308.218L483.759 290.436L464.703 278.582L445.646 266.727L420.5 248L381.5 215.5L306 154.5L236.5 101L189.5 64.5L157.5 44L132.5 30.5L114 21.5L91 13.5L65.5 7L45 3.5L21 1.5L0 0Z" fill="white" />
            </svg>
            <p>NexRail</p>
          </div>
          <div className="bookBtn">
            <button>
              Book Now
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#030208" />
                <path d="M17.4258 13.9894L26.0101 13.9894L26.0101 22.5737" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.2998 20.7004L25.89 14.1101" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.9893 26.0106L16.4429 23.5569" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>
          </div>
        </div>

      </div>
    </>
  );
}

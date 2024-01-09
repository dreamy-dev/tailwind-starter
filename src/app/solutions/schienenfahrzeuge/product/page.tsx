"use client";

import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/sections/Career";
import Features from "@/components/sections/Features";
import QualityFeatures from "@/components/sections/QualityFeatures";
import Specification from "@/components/sections/Specification";
import HeroText from "@/components/sections/HeroText";
import TextSection from "@/components/sections/TextSection";
import ProductCarousel from "@/components/sections/ProductCarousel";
import TestimonialsCarousel from "@/components/sections/ReferenzenCarousel";
import ImageFullWidth from "@/components/sections/ImageFullWidth";
const features = [
  {
    title: "Leichtbauweise",
    text: "Flow Budget automatically categorizes your income and expenses, making it easy to track where your money is going.",
    svg: (
      <svg
        width="58"
        height="65"
        viewBox="0 0 58 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.825 2.95829C45.7275 -1.5198 33.7263 2.76429 33.2211 2.94855C32.9909 3.03215 32.8099 3.21316 32.7255 3.44287L31.4195 7.00537L30.4569 4.22452C30.3749 3.9867 30.1894 3.7992 29.9524 3.71397C29.7158 3.62955 29.4532 3.65634 29.2385 3.78702L21.8566 8.2927C21.6663 8.40877 21.5303 8.59709 21.48 8.81462L20.5583 12.7878L19.6143 10.3325C19.5116 10.0662 19.2791 9.87062 18.9987 9.81543C18.715 9.75861 18.428 9.85358 18.2332 10.0614L10.564 18.2107C10.4414 18.3414 10.3639 18.507 10.3436 18.6847L9.56156 25.4347L7.94346 22.8455C7.77544 22.5768 7.46538 22.4331 7.15409 22.4591C6.83875 22.4916 6.56927 22.7002 6.45888 22.9972L0.706855 38.5273C0.650442 38.6807 0.639891 38.8463 0.677228 39.0054L4.8487 56.8486C3.28254 60.2987 2.38279 62.6051 2.2446 62.964C2.07942 63.3925 2.29289 63.8731 2.72147 64.0378C2.81968 64.076 2.92073 64.0938 3.02017 64.0938C3.35377 64.0938 3.66871 63.8917 3.79573 63.5614C3.83008 63.4722 4.71345 61.2095 6.32211 57.6905L26.8651 53.5321C27.0437 53.4956 27.2052 53.4023 27.325 53.2651L34.8976 44.6369C35.0819 44.4274 35.1484 44.1393 35.0745 43.8698C35.0011 43.6003 34.7969 43.386 34.5315 43.2992L31.8456 42.4201L36.3213 41.1498C36.4873 41.1028 36.6346 41.0054 36.7426 40.8706L42.5904 33.5849C42.7677 33.3641 42.8205 33.0679 42.73 32.7992C42.6395 32.5305 42.4187 32.3268 42.1439 32.2586L41.0331 31.981L43.8404 31.3852C44.0401 31.343 44.217 31.2286 44.3379 31.0638L49.5465 23.9697C49.7158 23.7391 49.7543 23.438 49.6496 23.1726C49.5445 22.9072 49.3107 22.7132 49.0299 22.6612L47.0319 22.2862C52.6939 16.3138 57.0965 4.5492 57.2933 4.01835C57.4495 3.59627 57.2422 3.12712 56.825 2.95829ZM44.7503 22.1807C44.5108 22.3909 44.4122 22.7188 44.4958 23.0257C44.5798 23.3325 44.8319 23.5646 45.1444 23.6231L47.4244 24.0508L43.1853 29.8244L37.1683 31.1011C36.7896 31.1815 36.5165 31.5127 36.5096 31.8998C36.5027 32.2862 36.7637 32.6271 37.1391 32.7205L40.4816 33.5565L35.6123 39.6231L28.7734 41.5638C28.4215 41.6636 28.1764 41.981 28.1691 42.3471C28.1618 42.7123 28.3944 43.0395 28.7418 43.1531L32.8176 44.4875L26.2608 51.9583L7.19265 55.8179C12.5057 44.5664 23.6481 24.1891 37.745 16.343C38.146 16.1198 38.2905 15.6133 38.0668 15.2123C37.844 14.8122 37.3375 14.6685 36.9366 14.8901C22.548 22.8989 11.4545 42.8607 5.98389 54.4022L2.35255 38.8706L7.43047 25.1612L9.40937 28.3284C9.59646 28.6271 9.95198 28.7773 10.297 28.6985C10.6415 28.6206 10.8992 28.3341 10.9398 27.9834L11.9629 19.1498L18.5372 12.1636L19.9796 15.9153C20.1111 16.2562 20.4601 16.4648 20.8132 16.4461C21.1776 16.4201 21.4828 16.1604 21.5652 15.8041L23.0206 9.52972L29.2235 5.74319L30.6115 9.75293C30.7263 10.0849 31.0376 10.3089 31.3891 10.3122C31.3919 10.3122 31.3944 10.3122 31.3968 10.3122C31.7454 10.3122 32.0571 10.0947 32.1772 9.76754L34.1492 4.39011C36.1517 3.744 46.1772 0.842217 55.4378 4.20666C54.2734 7.14416 49.8392 17.7286 44.7503 22.1807Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Spurtstärke",
    text: "The app offers a variety of budgeting methods, such as 50/30/20 rule, to help users find the approach that works best for them.",
    svg: (
      <svg
        width="64"
        height="65"
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="39.3335"
          width="23.7662"
          height="23.7662"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="1"
          y="9.41162"
          width="23.7662"
          height="23.7662"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="39.2334"
          y="1.1001"
          width="23.7662"
          height="23.7662"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="30.9219"
          y="39.3335"
          width="23.7662"
          height="23.7662"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Qualitative Verarbeitung",
    text: "  Set budget goals for each category and get real-time updates on how close you are to reaching them.",
    svg: (
      <svg
        width="64"
        height="56"
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.9601 8.09987V11.5399C55.68 12.9798 64 22.1798 64 33.3797C64 45.4597 54.08 55.3796 41.9201 55.2996C34.8001 55.2996 28.1602 51.8597 24.0002 46.0197H9.84026C9.44027 46.0197 9.12027 45.6997 9.12027 45.2997C9.12027 44.8997 9.44027 44.5797 9.84026 44.5797H24.4002H24.4802H24.6402C24.7202 44.6597 24.7202 44.6597 24.8002 44.6597L24.8802 44.7397C24.8802 44.7397 24.9602 44.7397 24.9602 44.8197L25.0402 44.8997C28.8002 50.4997 35.2001 53.8596 41.9201 53.8596C53.2801 53.8596 62.56 44.6597 62.56 33.2997C62.56 21.9398 53.2801 12.7398 42.0001 12.7398C35.2001 12.7398 28.8802 16.0998 25.0402 21.6998L24.9602 21.7798C24.9602 21.7798 24.9602 21.8598 24.8802 21.8598C24.8402 21.8598 24.8202 21.8798 24.8002 21.8998C24.7802 21.9198 24.7602 21.9398 24.7202 21.9398C24.6402 22.0198 24.6402 22.0198 24.5602 22.0198H24.4002H24.3202H9.84026C9.44027 22.0198 9.12027 21.6998 9.12027 21.2998C9.12027 20.8998 9.44027 20.5798 9.84026 20.5798H24.0802C27.6002 15.5398 33.0402 12.2598 39.0401 11.4599V8.01987H35.4401C35.0401 8.01987 34.7201 7.69987 34.7201 7.29987V1.6199C34.7201 1.2199 35.0401 0.899902 35.4401 0.899902H48.5601C48.9601 0.899902 49.2801 1.2199 49.2801 1.6199V7.37987C49.2801 7.77987 48.9601 8.09987 48.5601 8.09987H44.9601ZM42.7201 11.3399C42.9601 11.3599 43.2001 11.3799 43.4401 11.3799V8.09987H40.5601V11.3799C40.8001 11.3799 41.0401 11.3599 41.2801 11.3399L41.2801 11.3399L41.2801 11.3398C41.5201 11.3199 41.7601 11.2999 42.0001 11.2999C42.2401 11.2999 42.4801 11.3199 42.7201 11.3399ZM36.1601 6.57987H39.7601H44.1601H47.7601V2.33989H36.1601V6.57987ZM59.9197 33.2998C59.9197 43.2198 51.8398 51.2997 41.9198 51.2997C32.0798 51.2997 23.9999 43.2998 23.9999 33.3798C23.9999 23.4599 32.0798 15.3799 41.9198 15.3799C51.8398 15.3799 59.9197 23.3799 59.9197 33.2998ZM58.3997 33.3798C58.3997 24.2599 51.0398 16.8999 41.9198 16.8999C32.8798 16.8999 25.4399 24.2599 25.4399 33.3798C25.4399 42.4998 32.8798 49.8597 41.9198 49.8597C51.0398 49.8597 58.3997 42.4998 58.3997 33.3798ZM41.9195 36.8197C43.8395 36.8197 45.4395 35.2197 45.4395 33.2997C45.4395 32.3397 45.0395 31.4597 44.3995 30.8197L43.5995 19.7798C43.5195 18.9798 42.8795 18.2598 42.0795 18.2598C41.1195 18.1798 40.3195 18.8998 40.3195 19.7798L39.5195 30.8197C38.8795 31.4597 38.4795 32.3397 38.4795 33.2997C38.4795 35.2997 39.9995 36.8197 41.9195 36.8197ZM40.7195 31.8597C40.8795 31.6997 40.9595 31.5397 40.9595 31.2997L41.7595 19.9398C41.7595 19.8598 41.8395 19.7798 41.9195 19.7798C41.9995 19.7798 42.0795 19.8598 42.0795 19.9398L42.8795 31.2997C42.8795 31.5397 42.9595 31.6997 43.1195 31.8597C43.5995 32.2597 43.8395 32.8197 43.8395 33.3797C43.8395 34.4997 42.9595 35.3797 41.8395 35.3797C40.7195 35.3797 39.8395 34.4997 39.8395 33.3797C39.9995 32.7397 40.2395 32.1797 40.7195 31.8597ZM21.5201 28.0999H5.28013C4.88013 28.0999 4.56013 27.7799 4.56013 27.3799C4.56013 26.9799 4.88013 26.6599 5.28013 26.6599H21.5201C21.92 26.6599 22.24 26.9799 22.24 27.3799C22.24 27.7799 21.92 28.0999 21.5201 28.0999ZM0.719996 34.0999H20.6399C21.0399 34.0999 21.3599 33.7799 21.3599 33.3799C21.3599 32.9799 21.0399 32.6599 20.6399 32.6599H0.719996C0.319998 32.6599 0 32.9799 0 33.3799C0 33.7799 0.319998 34.0999 0.719996 34.0999ZM21.6001 38.5798C22 38.5798 22.32 38.8998 22.32 39.2998C22.32 39.6998 21.9201 40.0998 21.5201 40.0198H5.28013C4.88013 40.0198 4.56013 39.6998 4.56013 39.2998C4.56013 38.8998 4.88013 38.5798 5.28013 38.5798H21.6001Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Modulare Plattform",
    text: " We provide detailed reports and analytics that help users understand their spending habits, and make more informed financial decisions.",
    svg: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.2343 30.8308L45.7517 27.1283C50.7236 29.2705 55.8541 28.3184 59.6624 24.5366C63.6558 20.5432 64.3698 13.6672 63.3384 9.01265C63.2591 8.6424 62.9946 8.35149 62.6244 8.24571C62.2541 8.13992 61.8839 8.24571 61.6194 8.51017L52.7864 17.3697C52.6012 17.5548 52.3897 17.6341 52.1252 17.6341C51.8872 17.6341 51.6492 17.5284 51.4641 17.3697L46.9682 12.8474C46.5979 12.4771 46.5979 11.8953 46.9682 11.525L55.8541 2.5862C56.1186 2.32174 56.2244 1.95149 56.1186 1.58124C56.0128 1.211 55.7219 0.946534 55.3781 0.867195C50.6178 -0.243549 43.6624 0.417608 39.6426 4.43744C35.8343 8.19281 34.9087 13.3763 37.0244 18.3482L33.2426 21.7862L15.9467 4.411C15.788 4.25232 15.6029 4.17298 15.4178 4.12009L1.48058 1.52835C1.13678 1.44901 0.792974 1.58124 0.528511 1.81926C0.290494 2.08372 0.211155 2.42753 0.290494 2.77133L3.70206 15.9416C3.75496 16.1267 3.8343 16.2854 3.96653 16.4176L20.8393 33.3697L10.8426 41.5945C10.393 41.9647 10.3401 42.5994 10.7103 43.0226C10.9219 43.2606 11.2128 43.3928 11.5037 43.3928C11.7417 43.3928 11.9533 43.3135 12.1649 43.1548L22.2938 34.7978L30.069 42.6259L13.2756 60.8473C12.8789 61.1647 9.57314 63.4655 5.05083 58.9432C0.660742 54.5002 3.0938 51.3002 3.41116 50.9564L6.74339 47.968C7.16653 47.5978 7.19297 46.9366 6.82273 46.5135C6.45248 46.0903 5.79132 46.0639 5.36818 46.4341L1.95661 49.449C1.93016 49.4755 1.90372 49.5019 1.87727 49.5283C0.369833 51.168 -1.24339 55.5581 3.54339 60.3713C6.16157 62.9895 8.54173 63.7564 10.4194 63.7564C12.9583 63.7564 14.5715 62.3812 14.5979 62.3548C14.6244 62.3283 14.6508 62.3019 14.6773 62.2754L31.4707 44.0804L48.6343 61.3498C50.2211 62.9631 52.3632 63.8358 54.6112 63.8358C56.8591 63.8358 59.0012 62.9631 60.588 61.3498C63.8938 58.044 63.8938 52.649 60.588 49.3432L42.2343 30.8308ZM38.955 19.3531C39.2988 19.0358 39.3781 18.5598 39.193 18.1366C37.0508 13.7465 37.7649 9.14488 41.0707 5.83909C43.2393 3.6705 47.7616 1.84571 52.9979 2.50686L45.4872 10.0441C44.3236 11.2077 44.3236 13.0854 45.4872 14.249L49.9831 18.7713C50.5384 19.3267 51.2789 19.6441 52.0988 19.6441C52.8922 19.6441 53.6326 19.3267 54.2145 18.7713L61.6194 11.3399C62.1483 16.4705 60.3236 20.9135 58.1814 23.0556C54.8756 26.3879 50.3004 27.1019 45.9368 24.9333C45.5401 24.7482 45.064 24.8275 44.7467 25.1449L40.7533 29.3234L34.6707 23.2143L38.955 19.3531ZM59.1864 59.8953C57.9698 61.1118 56.3566 61.773 54.6641 61.773C52.945 61.773 51.3583 61.1118 50.1417 59.8953L5.63264 15.1482L2.67066 3.82918L14.7037 6.07711L59.1864 50.7978C61.6988 53.2837 61.6988 57.3829 59.1864 59.8953Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Tailor Made",
    text: "Synch your data across multiple devices, so you can access your budget and expenses from anywhere, at any time, and on any device.",
    svg: (
      <svg
        width="64"
        height="52"
        viewBox="0 0 64 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5131_6247)">
          <path
            d="M63.9449 19.6181C63.9449 19.3805 63.871 19.16 63.745 18.9786L53.5175 1.20069C53.3173 0.852713 52.9464 0.638184 52.545 0.638184C52.5239 0.638184 52.5034 0.64117 52.4825 0.642333C52.4685 0.641813 52.4554 0.638184 52.4413 0.638184H11.5563C11.5419 0.638184 11.5287 0.641868 11.5144 0.642402C11.4933 0.641197 11.4724 0.638184 11.4511 0.638184C11.0496 0.638184 10.6788 0.852713 10.4786 1.20069L0.205057 19.0587C0.179966 19.1022 0.158108 19.1471 0.139317 19.1929C0.136962 19.1987 0.135647 19.2048 0.133346 19.2107C0.111926 19.2656 0.0960389 19.3217 0.0836032 19.3786C0.0799328 19.3955 0.0765909 19.4122 0.0736873 19.4292C0.0631691 19.4906 0.056157 19.5523 0.0559377 19.6143C0.0559377 19.6159 0.0556641 19.6174 0.0556641 19.6189C0.0557188 19.682 0.0630596 19.7449 0.0737421 19.8074C0.0766456 19.8245 0.080097 19.8414 0.0838222 19.8584C0.0959841 19.9138 0.111597 19.9685 0.132305 20.0219C0.135154 20.0294 0.136852 20.037 0.139865 20.0444C0.158874 20.0906 0.180952 20.1359 0.206371 20.1799C0.21311 20.1915 0.221546 20.2018 0.228668 20.2131C0.238145 20.2282 0.248171 20.2428 0.25847 20.2575C0.295612 20.311 0.335659 20.3618 0.3808 20.4073C0.38206 20.4086 0.382881 20.4102 0.384196 20.4115L31.2054 51.2327C31.4246 51.4517 31.7116 51.5613 31.9988 51.5613C32.286 51.5613 32.573 51.4517 32.7922 51.2327L63.5998 20.425C63.8118 20.2209 63.9449 19.9356 63.9449 19.6181ZM40.7113 20.7401L31.9987 46.6902L23.2847 20.7401H40.7113ZM23.6644 18.4962L31.998 4.01006L40.3317 18.4962H23.6644ZM42.2714 17.3682L33.9378 2.88209H50.6052L42.2714 17.3682ZM21.7245 17.3682L13.3908 2.88209H30.0582L21.7245 17.3682ZM20.9178 20.7401L29.5282 46.3821L3.88624 20.7401H20.9178ZM43.0782 20.7401H60.1113L34.4691 46.3823L43.0782 20.7401ZM44.2113 18.4962L52.545 4.01006L60.8786 18.4962H44.2113ZM11.4511 4.01006L19.7847 18.4962H3.11742L11.4511 4.01006Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_5131_6247">
            <rect
              width="64"
              height="51.4783"
              fill="white"
              transform="translate(0 0.36084)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const featuresData = [
  {
    imageSrc: "/teaser_signalling-2.jpg",
    title: "Signalling",
    href: "/signalling",
  },
  {
    imageSrc: "/teaser_service.jpeg",
    title: " Service",
    href: "/service",
  },
];
export default function Product() {
  return (
    <>
      <HeroText
        breadcrumbs={[
          { text: "Lösungen", link: "/solutions" },
          { text: "Schienenfahrzeuge", link: "/schienenfahrzeuge" },
        ]}
        title="Leicht und flexibel: Flirt 160"
        leadText="Der Flirt 160 setzt Massstäbe: Leichte Bauweise aus Aluminium, markantes Design, höchster Passagierkomfort und einfache Wartung. Erfahren Sie, was dieses Modell so unverwechselbar macht."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <ImageFullWidth imgSrc="/AdobeStock.jpg" />
      <TextSection></TextSection>
      <QualityFeatures features={features} mainTitle="Qualitätsmerkmale" />
      <ProductCarousel />
      <Specification />
      <TestimonialsCarousel></TestimonialsCarousel>
      <Features mainTitle="Für einen effizienten und modernen Bahnbetrieb" featuresData={featuresData} />
      <Contact />
      <Career />
    </>
  );
}

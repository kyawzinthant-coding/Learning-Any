import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title ">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-end">
          {pricingTiers.map((item) => (
            <div
              key={item.title}
              className={twMerge(
                " card ",
                item.inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg text-black/50 font-bold",
                    item.inverse === true && "text-white/60"
                  )}
                >
                  {item.title}
                </h3>
                {item.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 ">
                    <span className="bg-[linear-gradient(to_right,#DD777DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${item.monthlyPrice}
                </span>
                <span className="font-bold text-black/50 tracking-tight">
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-[30px]",
                  item.inverse === true && "bg-white text-black"
                )}
              >
                {item.buttonText}
              </button>

              <ul className="mt-8 flex flex-col gap-5">
                {item.features.map((list) => (
                  <li key={list} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{list}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

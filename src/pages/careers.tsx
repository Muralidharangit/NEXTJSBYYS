// src/pages/careers.tsx
import Head from "next/head";
import Link from "next/link";
import CallToActionSection from "@/components/CallToActionSection";

type Job = {
  title: string;
  dept: string;
  location: string;
  applyHref: string; // final route for application form
};

const JOBS: Job[] = [
  {
    title: "Business Development Manager",
    dept: "Business Development",
    location: "Chennai, India",
    applyHref: "/apply?role=Business%20Development%20Manager",
  },
  {
    title: "Sales Executive",
    dept: "Business Development",
    location: "Bangalore, India",
    applyHref: "/apply?role=Sales%20Executive",
  },
  {
    title: "Software Engineer",
    dept: "Technology",
    location: "Remote / Chennai",
    applyHref: "/apply?role=Software%20Engineer",
  },
  {
    title: "Warehouse Manager",
    dept: "Logistics",
    location: "Multiple Locations",
    applyHref: "/apply?role=Warehouse%20Manager",
  },
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Byyizzy</title>
        <meta
          name="description"
          content="Join Byyizzy and help us build India’s most trusted industrial and hardware supply network."
        />
        <link rel="canonical" href="https://yourdomain.com/careers" />
      </Head>

      {/* Hero */}
      <section
        className="px-5 lg:px-20 pt-20 pb-14 bg-[#eff3fa]"
        aria-labelledby="careers-hero-title"
      >
       
       <div className="self-stretch flex flex-col justify-center items-center gap-2 mb-4 lg:mb-0">
                    <h2 data-aos="fade" id="hero-title"
                        className=" text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto aos-init aos-animate w-full"
                    >Let`s connect 
                    </h2>
                    <p data-aos="fade" data-aos-delay={300}
                        className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
                    >Got questions? Need more information? Have feedback for us? Just drop us a line. We would love to hear from you
                    </p>
                </div>
        </section>

      {/* Open Positions */}
      <section className="px-5 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-[#071431] mb-4">Open <span className="text-[#067afe]">Positions</span></h3>

          {/* Desktop: Table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr className="text-sm text-gray-600">
                  <th className="px-5 py-3 font-semibold">Job Title</th>
                  <th className="px-5 py-3 font-semibold">Department</th>
                  <th className="px-5 py-3 font-semibold">Location</th>
                  <th className="px-5 py-3 font-semibold">Apply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {JOBS.map((job) => (
                  <tr key={job.title} className="text-sm">
                    <td className="px-5 py-4 font-medium text-[#071431]">{job.title}</td>
                    <td className="px-5 py-4 text-gray-700">{job.dept}</td>
                    <td className="px-5 py-4 text-gray-700">{job.location}</td>
                    <td className="px-5 py-4">
                      <Link
                      href="#"
  aria-disabled="true"
  tabIndex={-1}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#067afe] text-white text-sm font-semibold hover:bg-[#0569dc] transition"
                        aria-label={`Apply for ${job.title}`}
                      >
                        Apply Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: Cards */}
          <div className="grid md:hidden">
            {JOBS.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-gray-200 p-4 shadow-sm bg-white"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[#071431]">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Department:</span> {job.dept}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    href="#"
  aria-disabled="true"
  tabIndex={-1}
                    className="inline-flex w-full items-center justify-center px-4 py-2 rounded-full bg-[#067afe] text-white text-sm font-semibold hover:bg-[#0569dc] transition"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className=" lg:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#071431] mb-3">How to <span className="text-[#067afe]">Apply</span></h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click <span className="font-medium">Apply Now</span> on the desired position.</li>
            <li>Fill out the application form with your details and resume.</li>
            <li>Our HR team will review and contact you for the next steps.</li>
          </ol>
          <div className="mt-6">
       
          </div>
        </div>
      </section>

      {/* CTA (reuse your existing section) */}

            <section
        className="relative bg-[#067afe] py-20 overflow-hidden"
        data-aos="fade-up"
      >
        <div
          className="container mx-auto px-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div data-aos="fade-right">
              <h3 className="text-4xl md:text-5xl font-bold text-white m-0">
               Join Byyizzy Today!
              </h3>
              <p className="mt-2 text-lg md:text-xl text-white/80 max-w-2xl">
            Help us build India’s most trusted industrial and hardware supply network.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
              >
                <span>Apply Now</span>
                <span className="flex items-center gap-1">➝ ➝</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <CallToActionSection /> */}
    </>
  );
}

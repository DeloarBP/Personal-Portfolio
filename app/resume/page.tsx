import EducationInstitute from "@/components/resume/EducationInstitute";
import EducationListSection from "@/components/resume/EducationListSection";
import HeaderSection from "@/components/resume/HeaderSection";
import Office from "@/components/resume/Office";
import OfficeListSection from "@/components/resume/OfficeListSection";
import Project from "@/components/resume/Project";
import ProjectListSection from "@/components/resume/ProjectListSection";
import SectionLayout from "@/components/resume/SectionLayout";
import Skills from "@/components/resume/Skills";
import SkillsListSection from "@/components/resume/SkillsListSection";
import Tools from "@/components/resume/Tools";
import ToolsListSection from "@/components/resume/ToolsListSection";

const resume = {
  name: "DELOAR BAPARI",
  email: "mddeloar.dev@gmail.com",
  phone: "+8801571239611",
  designation: "Software Engineer",
  github: "https://github.com/DeloarBP",
  linkedin: "https://www.linkedin.com/in/deloarbp/",
  offices: [
    {
      name: "PaySuite Fintech Limited",
      logo: "",
      duration: "Jun 1 - present",
      address: "J.R CASERO TOWER 46 Mohakhali C/A, Dhaka 1212",
      short_description: "",
    },
    {
      name: "Media365 Limited",
      logo: "",
      duration: "July 2019 - May 31, 2024",
      address: "Mohammdpur Dhaka 1207",
      short_description: "",
    },
    {
      name: "Razinsoft Limited",
      logo: "",
      duration: "Part time",
      address: "Adabor Thana, Mohammadpur, Dhaka",
      short_description: "",
    },
    {
      name: "CSN (Remote)",
      logo: "",
      duration: "Project",
      address: "Vicenza, Italy",
      short_description: "",
    },
  ],
  projects: [
    {
      name: "PaySuite Fintech Limited",
      project_link: "https://paysuiteltd.com",
      uses_technology: ["Vue3", "Nuxt-3", "Pinia", "Tailwind CSS - V3"],
      short_description: `Developed the front-end of Media365 Ltd.'s website,
                  implementing modern UI/UX design and responsive web layouts to
                  enhance user experience. `,
    },
    {
      name: "Meraki Tech Limited",
      project_link: "https://merakitechltd.com",
      uses_technology: ["Vue3", "Pinia", "Tailwind CSS"],
      short_description: `Developed the front-end of Meraki Tech Limited's website,
                  implementing modern UI/UX design and responsive web layouts to
                  enhance user experience. `,
    },
    {
      name: "InfoWorldGroup Limited",
      project_link: "http://infoworldgrpbd.com",
      uses_technology: ["Nextjs", "Tailwind CSS"],
      short_description: `At INFOWORLD Group, we don’t just build businesses—we
build legacies that shape the future of generations.`,
    },
    {
      name: "DocTime Limited",
      project_link: "https://doctime.com.bd",
      uses_technology: ["Vue3", "Nuxt-3", "Pinia", "Tailwind CSS"],
      short_description: `Bangladesh's leading telemedicine and healthcare protection service
build using latest technology to manage features video calls via
AgoraRTC and payments with SSLCommerz and bKash. Patients can join
video consultations, view reports, and maintain profiles, while doctors
handle appointments, and payments in their dashboard.
 `,
    },
    {
      name: "DocTime — (in Banglalink MyBL App)",
      project_link: "",
      uses_technology: ["Vue2", "vuex", "Tailwind CSS"],
      short_description: `Available in MyBL App Care segment`,
    },
    {
      name: "Media365 Limited",
      project_link: "https://media365.com.bd",
      uses_technology: ["Vue3", "Pinia", "Tailwind CSS"],
      short_description: `Developed the front-end of Media365 Ltd.'s website,
                  implementing modern UI/UX design and responsive web layouts to
                  enhance user experience. `,
    },
  ],
  education: [
    {
      institute: "Shyamoli Ideal Polytechnic Institute (SIPI)",
      subject: "Computer Technology",
      passing_year: "2019",
      result: "3.50",
    },
    {
      institute: "Nurul Amin University College",
      subject: "Humanities",
      result: "3.45",
      passing_year: "2014",
    },
    {
      institute: "Umedpur ozifa rabiullah lyceum school",
      subject: "Humanities",
      result: "3.25",
      passing_year: "2012",
    },
  ],
  skills: [
    {
      label: "Language",
      language: ["Html", "CSS", "JavaScript", "PHP"],
    },
    {
      label: "Database",
      language: ["MySQL", "MongoDB"],
    },
    {
      label: "Framework",
      framework: [
        "Bootstrap",
        "Tailwind CSS",
        "Laravel",
        "Alpine Js",
        "Vue",
        "React",
        "Nuxt",
        "Next",
        "jquery",
      ],
    },
    {
      label: "Packages",
      package: [
        "Pinia",
        "Vuex",
        "Redux",
        "Amazon chime",
        "AgoraRTC",
        "SSLCommerz",
        "Axios",
        "GSAP",
        "Headlessui",
        "Inertiajs",
      ],
    },
    {
      label: "Operating System",
      package: ["Ubuntu", "Windows 11"],
    },
  ],
  tools: [
    "Vs Code",
    "PhpStorm",
    "Postman",
    "Docker",
    "Nginx",
    "Figma",
    "Jira",
    "Obsidian",
    "ChatGPT",
    "Herd",
    "Table pluse",
    "Git",
    "NPM",
    "Yarn",
    "Pnpm",
  ],
};

export default function Resume() {
  return (
    <div className="p-8">
      <div className="mx-auto w-[51rem] space-y-6  dark:border-none p-10">
        <HeaderSection user={resume} />

        <SectionLayout title="Profile">
          <p className="text-slate-600">
            Full-Stack Software Engineer with 5+ years of experience in building
            scalable web applications using ReactJS, VueJS, TypeScript, and
            Laravel. Proven track record in delivering complex features,
            optimizing backend APIs, and driving technology migrations with
            high-quality results.
          </p>
        </SectionLayout>

        <div className="h-px mb-6 bg-gray-200 w-full border-t border-gray-200" />

        <SectionLayout title="Employment">
          <OfficeListSection>
            {resume?.offices?.map((office) => (
              <Office office={office} key={office.name} />
            ))}
          </OfficeListSection>
        </SectionLayout>

        <div className="h-px mb-6 bg-gray-200 w-full border-t border-gray-200" />

        <SectionLayout title="Projects">
          <ProjectListSection>
            {resume?.projects?.map((project) => (
              <Project project={project} key={project.name} />
            ))}
          </ProjectListSection>
        </SectionLayout>

        <div className="h-px mb-6 bg-gray-200 w-full border-t border-gray-200" />

        <SectionLayout title="Education">
          <EducationListSection>
            {resume?.education?.map((institute) => (
              <EducationInstitute
                institute={institute}
                key={institute.institute}
              />
            ))}
          </EducationListSection>
        </SectionLayout>

        <div className="h-px mb-6 bg-gray-200 w-full border-t border-gray-200" />

        <SectionLayout title="Skills">
          <SkillsListSection>
            {resume?.skills?.map((skills, index) => (
              <Skills skills={skills} key={index} />
            ))}
          </SkillsListSection>
        </SectionLayout>

        <div className="h-px mb-6 bg-gray-200 w-full border-t border-gray-200" />

        <SectionLayout title="Tools">
          <ToolsListSection>
            <Tools tools={resume.tools} />
          </ToolsListSection>
        </SectionLayout>
      </div>
    </div>
  );
}

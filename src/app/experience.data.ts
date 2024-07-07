export interface EXPERIENCE {
    title:string,
    companyName:string,
    timeRange:string,
    description:string,
    skills:string,
    logoUrl:string
}

export const experienceData:EXPERIENCE[] = [
    {
        title: 'Software Engineer',
        companyName: 'SAIntellect Solutions',
        timeRange: 'Mar 2024 - Present',
        description: 'As a web developer , I enhance existing projects, introduce new features, and innovate solutions for complex challenges',
        skills: 'Angular, TypeScript, JavaScript, HTML, CSS',
        logoUrl:"../assets/images/recent-company-logo.jpeg"
      },
      {
        title: 'Full Stack Developer',
        companyName: 'HyScaler',
        timeRange: 'Sep 2023 - Jan 2024',
        description: 'As a mobile app developer, I specialize in enhancing and optimizing marketplace mobile apps.',
        skills: 'Angular, TypeScript, JavaScript, HTML, CSS',
        logoUrl:"../assets/images/recent-company-logo.jpeg"
      },
]
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
}

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  birthDate: string;
  showProgressBar: boolean;
  progressValue: number;
}

@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent {
  resumeData: ResumeData = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    bio: '',
    skills: [],
    education: [],
    experience: [],
    birthDate: '',
    showProgressBar: false,
    progressValue: 0
  };

  newEducation: Education = {
    institution: '',
    degree: '',
    year: ''
  };

  newExperience: Experience = {
    company: '',
    position: '',
    duration: ''
  };

  skillOptions: string[] = ['JavaScript', 'Angular', 'TypeScript', 'HTML', 'CSS'];

  onSkillChange(skill: string, event: any) {
    if (event.target.checked) {
      this.resumeData.skills.push(skill);
    } else {
      this.resumeData.skills = this.resumeData.skills.filter(s => s !== skill);
    }
  }

  addEducation() {
    if (this.newEducation.institution && this.newEducation.degree && this.newEducation.year) {
      this.resumeData.education.push({ ...this.newEducation });
      this.newEducation = { institution: '', degree: '', year: '' };
    }
  }

  addExperience() {
    if (this.newExperience.company && this.newExperience.position && this.newExperience.duration) {
      this.resumeData.experience.push({ ...this.newExperience });
      this.newExperience = { company: '', position: '', duration: '' };
    }
  }
}

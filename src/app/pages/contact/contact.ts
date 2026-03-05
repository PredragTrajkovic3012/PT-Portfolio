import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;
  isLoading = signal(false);
  submitMessage = signal('');
  copiedField = signal<string | null>(null);

  contactInfo = [
    {
      label: 'Email',
      value: 'ptrajkovic997@gmail.com',
      href: 'mailto:ptrajkovic997@gmail.com',
      icon: 'email',
    },
    {
      label: 'Phone',
      value: '+381 61 343 4336',
      href: 'tel:+381613434336',
      icon: 'call',
    },
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PredragTrajkovic3012',
      icon: 'language',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/predrag-trajkovic-1b8929155/',
      icon: 'business',
      color: '#0a66c2',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/predragtrajkovic4/',
      icon: 'photo_camera',
      color: '#e4405f',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    // Initialize EmailJS with your public key
    emailjs.init('3NeKqwAWaZ1duO0hk');
  }

  copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField.set(field);
      setTimeout(() => this.copiedField.set(null), 2000);
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.submitMessage.set('Please fill in all fields correctly');
      return;
    }

    this.isLoading.set(true);
    this.submitMessage.set('');

    const { name, email, subject, message } = this.contactForm.value;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: 'ptrajkovic997@gmail.com',
      subject: subject,
      message: message,
      reply_to: email,
    };

    emailjs
      .send('service_z7etoak', 'template_15alkt9', templateParams)
      .then((response) => {
        this.submitMessage.set(
          'Email sent successfully! I will get back to you soon.',
        );
        this.contactForm.reset();
        this.isLoading.set(false);
        setTimeout(() => this.submitMessage.set(''), 3000);
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.submitMessage.set('Failed to send email. Please try again.');
        this.isLoading.set(false);
      });
  }
}

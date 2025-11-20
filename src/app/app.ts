import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProductFrontEnd');

  // Add these properties for template binding
  jsonInput: string = '';
  response: string | null = null;
  error: string | null = null;

  // Add this method for the submit button
  submitJson() {
    // You can implement the POST logic here later
    this.response = null;
    this.error = null;
    let parsed;
    try {
      parsed = JSON.parse(this.jsonInput);
      // Simulate a successful response for now
      this.response = 'JSON is valid and ready to be sent.';
    } catch (e) {
      this.error = 'Invalid JSON.';
    }
  }
}

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
  async submitJson() {
    this.response = null;
    this.error = null;
    let parsed;
    try {
      parsed = JSON.parse(this.jsonInput);
    } catch (e) {
      this.error = 'Invalid JSON.';
      return;
    }

    try {
      const res = await fetch('https://localhost:8079/api/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsed)
      });

      if (!res.ok) {
        const errorText = await res.text();
        this.error = `Error: ${res.status} ${res.statusText} - ${errorText}`;
        return;
      }

      const data = await res.json();
      this.response = JSON.stringify(data, null, 2);
    } catch (err: any) {
      this.error = `Network error: ${err.message || err}`;
    }
  }
}

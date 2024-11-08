import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metronome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css'],
})
export class MetronomeComponent {
  tempo: number = 120;
  isPlaying: boolean = false;
  intervalId: number | null = null;
  lastTap: number = 0;
  audioContext: AudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

  startMetronome() {
    if (this.isPlaying) {
      return; // Evita iniciar mais de um metrônomo ao mesmo tempo
    }
    this.isPlaying = true;
    this.intervalId = window.setInterval(() => {
      this.playClickSound();
    }, (60 / this.tempo) * 1000);
  }

  stopMetronome() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isPlaying = false;
  }

  updateTempo() {
    if (this.isPlaying) {
      this.stopMetronome();
      this.startMetronome();
    }
  }

  tapTempo() {
    const now = Date.now();
    if (this.lastTap !== 0) {
      const interval = now - this.lastTap;
      this.tempo = Math.round(60000 / interval);
      this.updateTempo();
    }
    this.lastTap = now;
  }

  playClickSound() {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = 'sine'; // Som mais realista para o metrônomo
    oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime); // Frequência da nota para som de clique
    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime); // Volume

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.05); // Duração do som
  }
}


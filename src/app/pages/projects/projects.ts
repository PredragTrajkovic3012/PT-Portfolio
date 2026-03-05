import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme-service';
import { Project, PROJECTS } from './projects.constant';
import { ProjectDetailDialogComponent } from './project-detail-dialog.component';
import { getSkillIcon } from './skill-icons.constant';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = PROJECTS;

  constructor(
    public dialog: MatDialog,
    private themeService: ThemeService,
  ) {}

  hasIcon(skill: string): boolean {
    return getSkillIcon(skill) !== null;
  }

  getIconDefinition(skill: string): string {
    return getSkillIcon(skill) || 'code';
  }

  openProjectDialog(project: Project): void {
    const dialogRef = this.dialog.open(ProjectDetailDialogComponent, {
      width: '90%',
      maxWidth: '800px',
      height: '90%',
      maxHeight: '90vh',
      data: { project, themeColor: this.themeService.currentColor() },
      panelClass: 'custom-dialog',
    });
  }
}

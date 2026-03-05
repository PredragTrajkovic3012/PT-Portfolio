import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ThemeService } from '../../services/theme-service';
import { Project, PROJECTS } from './projects.constant';
import { ProjectDetailDialogComponent } from './project-detail-dialog.component';
import { getSkillIcon } from './skill-icons.constant';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FontAwesomeModule],
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

  getIconDefinition(skill: string): IconDefinition {
    return getSkillIcon(skill) || ({} as IconDefinition);
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

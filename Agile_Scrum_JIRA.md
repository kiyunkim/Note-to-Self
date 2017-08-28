# Agile

- a methodology/philosophy; [Kanban](#kanban) and [Scrum](#scrum) are frameworks for the Agile environment
- [JIRA](#jira) is an issue tracker commonly used by Agile teams
- Wikipedia:
  - Agile software development describes a set of values and principle for software development in which the requirements and solutions change and evolve through the collaborative effort of cross-functional teams. 
  - It advocates adaptive planning, evolutionary development, continuous movement, and encourages rapid and flexible response to change.

  
### Value/Effort Matrix
  
  - Quickly rank features by their **value** relative to its **effort** or difficulty.
  - 4 Quadrant map: x-axis as difficulty, y-axis as value
  - Used for 'nice to have' features, not critical or need-have features
  
## Kanban

- Follows a continuous flow
- Minimizes upfront planning
- Always work on the most important task first

## Scrum

- A framework, not a process
  - Process: step-by-step guidance, repeatable from project to project
  - Framework: definition of key tasks and routine, is non-prescriptive
- Relies on a cycle of sprints
- Defines specific roles for a team (scrum master, product owner, developers)
- Defines specific meetings for a sprint 
  - Each role is represented in all meetings
  - Enhances communication within team
- Burndown chart & Velocity:
  - **Burndown chart** is a graphical representation of work pending vs time left
  - **Velocity** is the amount of work a team can do in particular sprint; it is a guideline used to determine how much work can be done in the next sprint and it is not a constant. 


&nbsp;
&nbsp;
&nbsp;

--- 

## JIRA Agile
- Created by Atlassian for Agile product management
- Create and estimate stories, build and prioritize backlog, team commitment, velocity, etc
- Based on 3 boards: Planning, Task, Chart
- First and foremost issue tracking -- but has evolved into a tool for planning and organizing projects used by Agile teams

### Issues
- **Issues** can be used to describe a new feature, bug, task, or improvement
- Anatomy of an issue
  - Base information and fields (key, summary, timestamps, assignees)
  - Resolution (fixed, won't fix, duplicate) and Status (open, closed)
  - Custom fields

### JIRA Concepts
- Issue can belong to several **components**
  - Components are part of a project (e.g. user interface, database, business component)
- All issues must be assigned to a project
  - In JIRA a project will have its own home page or dashboard
    
### Search

- Keywords are case sensitive
- Keywords for smart querying

  **Term** | **Example**
  ---- | ----
  `my` | my open bugs
  `r:` | r:me or r:stuart
  `<project name or key>` | WEBOPT or Web Optimization
  `overdue` | overdue
  `created:` `updated:` `due:` | created:yesterday or updated:-1w
  `<priority>` | medium low critical
  `<resolution>` | fixed cannot reproduce 
  `<issue type>` | bug task bugs tasks
  `c:` for components | c:gpstracker
  `v:` | v:1.0
  `ff:` for fixed version | ff:1.0
  `*` wildcard | v:1.5\*

- JQL


### Vocab

- **Epic**: High level category; has no starting or end date. Specific stories and tasks will be assigned under it. (e.g. Performance improvement is an epic) Known as themes in Scrum
- **Story**: Used for larger amounts of work; short description of a functionality
- **Task**: Simpler and smaller - a punctual to do or action item
  - **Sub-task**
- **Bug**
- 

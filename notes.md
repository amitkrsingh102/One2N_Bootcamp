# Guide

### Type

Must be one of the following:

-   `feat`: A new feature
-   `fix`: A bug fix
-   `docs`: Documentation only changes
-   `style`: Changes that don't affect the meaning of the code (white-space, formatting, etc)
-   `refactor`: A code change that neither fixes a bug nor adds a feature
-   `perf`: A code change that improves performance
-   `test`: Adding missing tests or correcting existing tests
-   `chore`: Changes to the build process or auxiliary tools and libraries
-   `ci`: Changes to CI configuration files and scripts

### Scope

The scope should be the name of the module affected (as perceived by the person reading the changelog generated from commit messages).

### Subject

The subject contains a succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize first letter
-   no dot (.) at the end

### Body

The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

## Branch Naming Conventions

### Branch Types

-   `main` or `master`: Main production branch
-   `develop`: Main development branch
-   `feature/*`: Feature branches
-   `bugfix/*`: Bug fix branches
-   `hotfix/*`: Hot fix branches for production
-   `release/*`: Release branches
-   `refactor/*`: Code refactoring branches
-   `docs/*`: Documentation branches

### Initial Project Setup

```bash
feat(project): initialize express typescript project

- Set up basic Express.js with TypeScript
- Configure tsconfig.json
- Add initial project structure
- Set up basic environment configuration

Closes #1
```

### Adding Database Configuration

```bash
feat(db): add prisma configuration and student model

- Add Prisma schema with Student model
- Configure database connection
- Add initial migration
- Set up connection pooling

Closes #2
```

### Adding API Endpoints

```bash
feat(api): implement student CRUD endpoints

- Add create student endpoint
- Add get all students endpoint
- Add get student by id endpoint
- Add update student endpoint
- Add delete student endpoint

Closes #3
```

### Documentation Updates

```bash
docs(readme): add project documentation

- Add project overview
- Add setup instructions
- Add API documentation
- Add environment variable documentation

Closes #4

```

### Adding Tests

```bash
test(api): add unit tests for student endpoints

- Add tests for create student
- Add tests for get students
- Add tests for update student
- Add tests for delete student
- Configure Jest and test environment

Closes #5
```

### Bug Fixes

```bash
fix(api): resolve student email validation

- Add email format validation
- Handle duplicate email cases
- Improve error messages
- Add tests for email validation

Fixes #6
```

### Dependency Updates

```bash
chore(deps): update project dependencies

- Update Express to v4.18.2
- Update Prisma to latest version
- Update dev dependencies
- Fix security vulnerabilities

Closes #7
```

### Code Refactoring

```bash
refactor(service): improve student service architecture

- Separate business logic from controllers
- Implement service layer pattern
- Improve error handling
- Add service interfaces

Closes #8
```

### Performance Improvements

```bash
perf(db): optimize database queries

- Add indexes for frequently accessed fields
- Implement query caching
- Optimize JOIN operations
- Add query performance tests

Closes #9
```

### CI/CD Updates

```bash
ci(workflow): add github actions workflow

- Add test workflow
- Add build workflow
- Configure deployment pipeline
- Add environment secrets

Closes #10
```

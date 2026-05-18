---
description: The Unified Master Workflow for the NEXUS CORE project. Consolidates Context Loading, Progress Checking, Feature Development, Documentation, and Maintenance.
---

# Unified Feature Implementation Workflow

This is the **Master Protocol** for all development activities. It consolidates all sub-workflows into a single, linear process to ensure "Military Standard" quality.

**Phases:**
1.  [Context Loading](#1-context-loading-phase)
2.  [Progress Check](#2-progress-check-phase)
3.  [Feature Development](#3-feature-development-phase-core)
4.  [Documentation Generation](#4-documentation-generation-phase)
5.  [System Maintenance](#5-system-maintenance-phase)

---

## 1. Context Loading Phase
*Goal: Quickly grasp the project structure and architecture.*

1.  **Read Core Docs**:
    *   `project_plan/MASTER_PLAN.md` (Roadmap & Status)
    *   `backend_plan/BACKEND_ARCHITECTURE.md` (Standards & Schema)
    *   `frontend_plan/FRONTEND_ARCHITECTURE.md` (Tech Stack & Modules)
2.  **Read READMEs**:
    *   `README.md` (Root)
    *   `backend/README.md`
    *   `frontend/README.md`
3.  **Generate Summary**: Briefly summarize the current project phase and key architectural rules (e.g., "Strict Typing", "No alert()").

---

## 2. Progress Check Phase
*Goal: Sync with the latest work recorded in the Progress Logs.*

1.  **Read Logs**:
    *   **Backend**: `backend_plan/BACKEND_PROGRESS_LOG.md`
    *   **Frontend**: `frontend_plan/FRONTEND_PROGRESS_LOG.md`
2.  **Identify Active Tasks**:
    *   Scan for unchecked items `[ ]`.
    *   Check the latest Version Entry (e.g., "Version 1.3 - UI Fixes").
3.  **Verification Check (For Completed Tasks)**:
    *   Before starting new work, ensure previous tasks are verified:
        *   **Automated**: `npm run build` (Frontend) passes, Backend starts up.
        *   **Manual**: Features work as described.

---

## 3. Feature Development Phase (CORE)
*Goal: Implement new features with strict quality control.*

### 3.1. Roadmap Alignment
*   Check `*_ROADMAP.md` files. **Rule**: Do not deviate from the Roadmap order.

### 3.2. Planning & Logging
1.  **Append to Progress Log**:
    ```markdown
    ## [Date] Version X.X - [Feature Name]
    **Goal**: [What and Why?]
    ### Expected Changes
    - [ ] Create `app/routers/new_feature.py`
    ### Test Plan
    - [ ] Verify endpoint `GET /api/v1/new-feature` returns 200.
    ```
2.  **Request Review**: Use `notify_user` to get approval.

### 3.3. Implementation (Execution)
1.  **Define Types First**: Pydantic Models (Backend) & TypeScript Interfaces (Frontend).
2.  **Implement Logic**: Follow Architecture. No `any` types.
3.  **File Headers**: Add version header to every new file.

### 3.4. Verification (CRITICAL)
1.  **Automated Check (Mandatory)**:
    *   **Frontend**: Run `npm run build` to catch TypeScript/Linter errors.
    *   **Backend**: Verify server startup (`python -c "import app.main"`).
2.  **Manual Verification**:
    *   Verify against the **Test Plan** in the Progress Log.
    *   Ensure "Military Standard" quality (no console errors, strict typing).

### 3.5. Finalization
1.  **Update Walkthrough**: Log achievements in `walkthrough.md`.
2.  **Update Roadmaps**: Mark tasks as `[x]`.
3.  **Notify User**: Report completion.

---

## 4. Documentation Generation Phase
*Goal: Keep READMEs synchronized with code changes.*

1.  **Log the Update**: Append "Documentation Update" to Progress Logs.
2.  **Generate/Update READMEs**:
    *   **Root**: Overview, Tech Stack, Setup.
    *   **Backend**: Architecture, Modules, API Docs.
    *   **Frontend**: Architecture, Modules, Tech Stack.
    *   **Rule**: All files MUST start with a **Version Header**.
3.  **Verification**:
    *   **Automated**: Run `npm run build` to ensure docs didn't break code.
    *   **Manual**: Check links and setup commands.

---

## 5. System Maintenance Phase
*Goal: Deep cleaning, architectural synchronization, and version bumping.*

1.  **Audit**: Check for obsolete files and version mismatches.
2.  **Refinement**:
    *   Update `*_ARCHITECTURE.md` to match reality.
    *   Clean up redundant files.
3.  **Documentation**: Execute [Phase 4](#4-documentation-generation-phase).
4.  **Final Verification**:
    *   **Consistency Check**: Ensure `MASTER_PLAN.md` aligns with new READMEs.
    *   **Automated Check**: `npm run build` (Frontend) & Backend Startup.
    *   **Sanity Check**: Verify basic system functionality.
5.  **Notify User**: Report maintenance summary and new Version number.

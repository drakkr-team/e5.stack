# apps/web/src/features/user_management/profile KNOWLEDGE BASE

## OVERVIEW

Authenticated profile management feature for updating user name and deleting the account, using TanStack Form, Tuyau mutations, and colocated French translations.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Profile update UI | `components/update-form.tsx` | Uses `useUpdateProfileForm`; wraps in `Card`. |
| Update mutation | `hooks/use-update-mutation.ts` | Calls `api.profile.update`; invalidates `api.profile.view` cache. |
| Delete trigger UI | `components/delete-section.tsx` | Section button that opens confirmation dialog. |
| Delete confirmation | `components/delete-confirmation-dialog.tsx` | Destructive action confirmation dialog. |
| Delete mutation | `hooks/use-delete-mutation.ts` | Calls `api.profile.delete`; removes queries and navigates to `/login`. |
| Translations | `locales/fr.json` | Copy for profile hooks and components. |
| Profile route | `../../../routes/(private)/profile/page.tsx` | Renders update form and delete section. |

## CONVENTIONS

- Profile forms live inside authenticated route boundaries only.
- Update mutation invalidates `api.profile.view.pathKey()` on success.
- Delete flow uses a two-step confirmation pattern (section button → dialog confirmation).
- Form validation uses `zod` schemas with `revalidateLogic()`.
- Mutations use `toastifyTuyauError` for standard error mapping (network, unauthenticated, validation, unexpected).
- Hook translation namespaces include the full feature path and hook name.

## ANTI-PATTERNS

- Do not hardcode API paths; use `api.profile.*.mutationOptions()`.
- Do not bypass `useAppForm`; field components are registered centrally.
- Do not forget to invalidate or remove profile cache after update/delete.

## NOTES

- Profile update and delete are separate mutations with independent UI pieces.
- The delete action is irreversible and requires explicit user confirmation before firing the mutation.

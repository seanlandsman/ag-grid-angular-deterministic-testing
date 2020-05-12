# agGrid Angular Testing

I'd suggest creating a cell renderer that wraps the cell contents with a div (or span) and populates the ID
column with the appropriate value.

We can then interrogate these cells by ID - an example of this can be found in `src/app/app.component.spec.ts`

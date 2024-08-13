create or replace function delete_user_xpollen_entries()
returns void
language plpgsql
security definer
as $$
begin
    delete from xpollen
    where user_id = auth.uid();
end;
$$;
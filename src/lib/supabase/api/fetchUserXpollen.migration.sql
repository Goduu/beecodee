CREATE OR REPLACE FUNCTION get_xpollen_sum()
RETURNS BIGINT AS $$
DECLARE
    sum_xpollen BIGINT;
BEGIN
    SELECT COALESCE(SUM(xpollen), 0) INTO sum_xpollen
    FROM user_lessons
    WHERE user_id = auth.uid();

    RETURN sum_xpollen;
END;
$$ LANGUAGE plpgsql;
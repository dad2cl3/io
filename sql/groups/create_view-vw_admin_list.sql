CREATE OR REPLACE VIEW groups.vw_admin_list AS (
WITH members AS (
		SELECT
			tc.clan_name, tm.destiny_name, tm.destiny_membership_type, tm.added, tm.deleted, tm.admin,
			MAX(tchar.last_played) last_played,
			SUM(tchar.minutes_played_total) minutes_played_total,
			tm.admin admin_flag, tm.versions_owned
		FROM groups.t_clans tc, groups.t_members tm, groups.t_characters tchar
		WHERE tc.clan_id = tm.clan_id
		AND tm.member_id = tchar.member_id
		AND tc.clan_name NOT IN ('Iron Orange 3rd Bn', 'Iron Orange Moon')
		AND tchar.deleted IS NULL
		GROUP BY tc.clan_name, tm.destiny_name, tm.destiny_membership_type, tm.added, tm.deleted, tm.admin, tm.versions_owned
	)
	SELECT JSONB_AGG(
		JSONB_BUILD_OBJECT(
			'clan_name',
			clan_name,
			'gamertag',
			destiny_name,
			'platform',
			destiny_membership_type,
			'added',
			added,
			'deleted',
			deleted,
			'last_played',
			last_played,
			'minutes_played_total',
			minutes_played_total,
			'admin_flag',
			admin_flag,
			'versions_owned',
			groups.fn_resolve_versions(versions_owned)
	)) clan_members
	FROM members
);

GRANT SELECT ON groups.vw_admin_list TO node_batch;
type Auth = {
    user: User
}

type User = {
    name: string
    two_factor_enabled: boolean
    current_team_id: number,
    current_team: Array<any>,
    all_teams: Array<any>,
    profile_photo_url: string,
    email: string
}

type JetStream = {
    canCreateTeams: boolean,
    canManageTwoFactorAuthentication: boolean,
    canUpdatePassword: boolean,
    canUpdateProfileInformation: boolean,
    hasEmailVerification: boolean,
    flash: [],
    hasAccountDeletionFeatures: boolean,
    hasApiFeatures: boolean,
    hasTeamFeatures: boolean,
    hasTermsAndPrivacyPolicyFeature: boolean,
    managesProfilePhotos: boolean
}

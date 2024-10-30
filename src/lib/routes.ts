import Loading from "./elements/base/Loading.svelte";
import NotFound from "./elements/base/NotFound.svelte";
import Onboarding from "./elements/onboarding/Onboarding.svelte";
import OnboardingCreate from "./elements/onboarding/OnboardingCreate.svelte";
import OnboardingSelect from "./elements/onboarding/OnboardingSelect.svelte";
import RecommendedMints from "./elements/onboarding/RecommendedMints.svelte";
import RestoreFromFile from "./elements/onboarding/RestoreFromFile.svelte";
import RestoreFromSeed from "./elements/onboarding/RestoreFromSeed.svelte";
import Base from "./elements/wallet/Base.svelte";
import Receive from "./elements/wallet/receive/Receive.svelte";
import WalletHome from "./elements/wallet/WalletHome.svelte";

export const routes = {
    '/': Loading,

    // Onboarding
    '/onboarding': Onboarding,
    '/onboarding/select': OnboardingSelect,
    '/onboarding/new/quick': OnboardingSelect,
    '/onboarding/new/secure': OnboardingCreate,
    '/onboarding/restore/seed': RestoreFromSeed,
    '/onboarding/restore/file': RestoreFromFile,
    '/onboarding/addMints': RecommendedMints,
    
    // wallet routes
    '/wallet/*': Base,
    // Wrapping the Author component
    // '/restore': Onboarding,
    

    // Catch-all route last
    '*': NotFound,

}

export const WALLET_ROUTE_PREFIX = '/wallet'

export const walletRoutes = {
    '/': WalletHome,
    '/receive': Receive,
    '*': NotFound
}
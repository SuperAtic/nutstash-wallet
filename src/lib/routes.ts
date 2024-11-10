import Loading from "./elements/base/Loading.svelte";
import NotFound from "./elements/base/NotFound.svelte";
import MintView from "./elements/mint/MintView.svelte";
import Onboarding from "./elements/onboarding/Onboarding.svelte";
import OnboardingCreate from "./elements/onboarding/OnboardingCreate.svelte";
import OnboardingSelect from "./elements/onboarding/OnboardingSelect.svelte";
import RecommendedMints from "./elements/onboarding/RecommendedMints.svelte";
import RestoreFromFile from "./elements/onboarding/RestoreFromFile.svelte";
import RestoreFromSeed from "./elements/onboarding/RestoreFromSeed.svelte";
import Base from "./elements/wallet/Base.svelte";
import ReceiveCashu from "./elements/wallet/receive/ecash/ReceiveCashu.svelte";
import SendLn from "./elements/wallet/send/ln/SendLN.svelte";
import WalletHome from "./elements/wallet/WalletHome.svelte";
import MintListView from "./elements/mint/MintListView.svelte";
import MintQuoteListView from "./elements/wallet/receive/ln/MintQuoteListView.svelte";
import MintQuoteItem from "./elements/wallet/receive/ln/MintQuoteItem.svelte";
import ReceiveView from "./elements/wallet/receive/ReceiveView.svelte";
import PasswordSetup from "./elements/security/PasswordSetup.svelte";
import ContactsView from "./elements/contacts/ContactsView.svelte";
import EcashView from "./elements/data/ecash/EcashView.svelte";
import HistoryView from "./elements/data/history/HistoryView.svelte";
import SettingsView from "./elements/settings/SettingsView.svelte";
import BackupSettings from "./elements/settings/BackupSettings.svelte";
import CurrencySettings from "./elements/settings/CurrencySettings.svelte";
import EcashSettings from "./elements/settings/EcashSettings.svelte";
import KeysSettings from "./elements/settings/KeysSettings.svelte";
import MintsSettings from "./elements/settings/MintsSettings.svelte";
import NostrSettings from "./elements/settings/NostrSettings.svelte";
import SecuritySettings from "./elements/settings/SecuritySettings.svelte";
import TransactionsView from "./elements/data/transactions/TransactionsView.svelte";
import TransactionItem from "./elements/data/transactions/TransactionItem.svelte";
import EcashDetailView from "./elements/data/ecash/EcashDetailView.svelte";
import MeltQuoteItem from "./elements/wallet/send/ln/MeltQuoteItem.svelte";

export const routes = {
    '/': Loading,

    // Onboarding
    '/onboarding': Onboarding,
    '/onboarding/pass': PasswordSetup,
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
    
    "/mint/:url": MintView,
    "/mint/": MintListView,
    
    '/contacts': ContactsView,
    
    '/ecash': EcashView,
    '/ecash/:type/:secret': EcashDetailView,
    
    '/history': HistoryView,
    
    '/receive': ReceiveView,
    '/receive/ln': MintQuoteListView,
    '/receive/ln/:quote': MintQuoteItem,
    '/receive/cashu': ReceiveCashu,
    '/receive/cashu/:token': ReceiveCashu,
    
    '/send/cashu': TransactionsView,
    '/send/cashu/:id': TransactionItem,
    '/send/ln': SendLn,
    '/send/ln/:quote': MeltQuoteItem,

    '/settings': SettingsView,
    '/settings/backup': BackupSettings,
    '/settings/currency': CurrencySettings,
    '/settings/ecash': EcashSettings,
    '/settings/keys': KeysSettings,
    '/settings/mints': MintsSettings,
    '/settings/nostr': NostrSettings,
    '/settings/security': SecuritySettings,

    '*': NotFound
}
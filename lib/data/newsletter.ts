export interface NewsletterContent {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  disclaimer?: string;
}

export const newsletterContent: NewsletterContent = {
  title: "Stay in the loop",
  subtitle:
    "Get product updates, engineering blog posts, and early access to new features. No spam, unsubscribe anytime.",
  placeholder: "you@company.com",
  buttonText: "Subscribe",
  disclaimer: "By subscribing, you agree to our Privacy Policy.",
};

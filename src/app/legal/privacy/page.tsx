import { Box, Divider, Fab, Stack } from "@mui/material";
import { Icon } from "@iconify/react"
import FloatingActionBox from "@/components/FloatingActionBox";

export default function privacyPage() {
    return (
        <>
            <Box
                minHeight={"100vh"}
                width={{ xs: "100%", sm: "50%" }}
                sx={{
                    p: 3,
                    backgroundColor: "#161c24",
                    color: "#ffffff",
                    mx: "auto"
                }}
            >
                <h1>Privacy Policy for TurkuNode Discord Bot and tkurbx.com</h1>

                <Stack spacing={3} sx={{ my: 3 }} textAlign="left">
                    <Box component="p" sx={{ fontWeight: 500, color: "text.secondary" }}>
                        Effective Date: <b>13 June 2025</b>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Introduction</h2>
                        <p>
                            This Privacy Policy explains how Tkurbx ("Tkurbx", "we", "our", or "us") handles your personal information across our services, including the TurkuNode Discord bot ("TurkuNode", or "Bot") and the tkurbx.com website ("Website"). It also applies to our authentication system (auth.tkurbx.com) and integration with Better-Auth. By using TurkuNode, the tkurbx.com website, or any services offered by Tkurbx, you agree to the practices described in this policy.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Information Collection</h2>
                        <p>
                            We collect different types of information to provide and improve our services. Personally identifiable information (PII) collected includes data that can be used to identify you directly or indirectly, such as your User ID, Name, Profile Image, Roblox ID, Discord ID, Provider ID, Account ID, and associated authentication tokens.
                        </p>
                        <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
                            <li>
                                <b>Information from tkurbx.com User Accounts:</b>
                                <ul style={{ marginTop: 4 }}>
                                    <li>User ID: A unique identifier for your account.</li>
                                    <li>Name: Your username and display names.</li>
                                    <li>Profile Image: Your Roblox profile image.</li>
                                    <li>Account Creation and Update Data: Information about when your account was created and last modified.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Linking Information (via auth.tkurbx.com):</b>
                                <ul style={{ marginTop: 4 }}>
                                    <li>Roblox ID: Your Roblox User ID to connect your tkurbx.com account with your Roblox identity.</li>
                                    <li>Discord ID: Your Discord User ID to connect your tkurbx.com account with your Discord identity.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Authentication Information (via Better-Auth and Account Management):</b>
                                <ul style={{ marginTop: 4 }}>
                                    <li>User ID: To link authentication details to your tkurbx.com account.</li>
                                    <li>Provider ID &amp; Account ID: Information from third-party login providers (like Discord or Google) if you use them to sign in.</li>
                                    <li>Access Tokens, Refresh Tokens, ID Tokens, and Expiry Dates: Credentials from third-party services (like Discord or Roblox) that let us access certain information or perform actions on your behalf (with your permission). They are stored with their expiry times.</li>
                                    <li>User Agent: Information about your browser and operating system, used for security and to prevent fraud.</li>
                                    <li>Authentication Record Data: Information about when authentication records were created and last updated.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Verification Information:</b> For certain processes, we may store data necessary for verification.
                            </li>
                            <li>
                                <b>Discord Bot Specific Information:</b>
                                <ul style={{ marginTop: 4 }}>
                                    <li>
                                        TurkuNode uses your Discord ID and Roblox ID (linked via auth.tkurbx.com) to provide personalised services and manage your interactions within Discord.
                                    </li>
                                </ul>
                            </li>
                        </Stack>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Use of Information</h2>
                        <p>The information we collect is used to:</p>
                        <Stack component="ul" spacing={1.5} sx={{ pl: 3 }}>
                            <li>
                                <b>Provide and Improve Services:</b> To run, maintain, and enhance Tkurbx’s services, including TurkuNode and the tkurbx.com website. This includes processing commands, managing linked accounts, delivering personalised experiences, and providing account-specific features.
                            </li>
                            <li>
                                <b>Authentication and Security:</b> Information from Better-Auth and our account management is vital for securely authenticating users, preventing unauthorised access, detecting and preventing fraud, and maintaining system integrity.
                            </li>
                            <li>
                                <b>Account Management:</b> To manage user accounts, including creation, login, updates, and linking external accounts (Roblox, Discord).
                            </li>
                            <li>
                                <b>Communication:</b> To send you important notices and updates about TurkuNode or the tkurbx.com website, and to respond to your enquiries or support requests.
                            </li>
                            <li>
                                <b>Understand and Analyse Usage:</b> To understand how our services are used, which helps us develop new features and improve existing ones.
                            </li>
                            <li>
                                <b>Comply with Laws:</b> To meet applicable laws, regulations, and legal processes.
                            </li>
                        </Stack>
                        <p><b>Legal Basis for Processing (GDPR):</b> We rely on your consent when linking accounts, on contractual necessity for providing our services, on our legitimate interests for security and service improvements, and on legal obligations where required by law.</p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Your Rights</h2>
                        <p>
                            You have certain rights regarding your personal information, including:
                        </p>
                        <Stack component="ul" spacing={1.5} sx={{ pl: 3 }}>
                            <li>
                                <b>Right to Access:</b> You can request a copy of the personal data we hold about you.
                            </li>
                            <li>
                                <b>Right to Correct or Update:</b> You can ask us to correct or update inaccurate or incomplete information.
                            </li>
                            <li>
                                <b>Right to Delete:</b> You may request deletion of your personal data, subject to legal or contractual obligations.
                            </li>
                            <li>
                                <b>Right to Object:</b> You can object to certain types of processing, such as direct marketing or processing based on legitimate interests.
                            </li>
                            <li>
                                <b>Right to Withdraw Consent:</b> If processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of processing before withdrawal.
                            </li>
                        </Stack>
                        <p>
                            To exercise any of these rights, please contact us at{" "}
                            <a href="mailto:privacy@tkurbx.com" style={{ color: "#64B5F6", textDecoration: "underline" }}>
                                privacy@tkurbx.com
                            </a>.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Account-related data is kept until you delete your account or request deletion.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Sharing of Information</h2>
                        <p>
                            Your personal information will never be transferred, sold, or shared with any third parties under any circumstances. We are committed to maintaining the utmost privacy and confidentiality of your data.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Data Security</h2>
                        <p>
                            We use appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure, or destruction of your personal information, including your name, linked IDs, authentication tokens, and any associated data stored on our servers. This includes, but is not limited to, firewalls and secure access protocols. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Cookies and Similar Technologies</h2>
                        <p>
                            TurkuNode does not directly use cookies for its main functions. On the tkurbx.com website, cookies (or similar local storage technologies) are used solely for authentication purposes—these are essential to allow you to log in and stay logged in securely. We do <b>not</b> use cookies for tracking, advertising, or analytics, and we do <b>not</b> set any third-party cookies or use third-party analytics tools. All authentication cookies are strictly necessary and are not shared with external parties.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Children's Privacy</h2>
                        <p>
                            Our services are not intended for anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and know that your child has provided us with personal information, please contact us. If we find out that we have collected personal information from a child under 13 without verified parental consent, we will take steps to remove that information from our servers.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will let you know about any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. For significant changes, we might also notify you through TurkuNode or the tkurbx.com website. We advise you to review this Privacy Policy periodically for any changes. Your continued use of TurkuNode and our services after any modifications will mean you acknowledge and agree to the updated policy.
                        </p>
                    </Box>

                    <Divider color="#E0E0E0" />

                    <Box>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, TurkuNode's practices, or your dealings with tkurbx.com, please contact us at{" "}
                            <a href="mailto:privacy@tkurbx.com" style={{ color: "#64B5F6", textDecoration: "underline" }}>
                                privacy@tkurbx.com
                            </a>.
                        </p>
                    </Box>
                </Stack>

            </Box>

            <FloatingActionBox>
                <Fab size="medium" variant="extended" color="primary" aria-label="contact" href="mailto:privacy@tkurbx.com">
                    <Icon icon="simple-icons:maildotru" style={{ marginRight: 8 }} />
                    <b>Contact us</b>
                </Fab>
            </FloatingActionBox>
        </>
    );
}

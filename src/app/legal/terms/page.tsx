import { Box, Divider, Fab, Stack } from "@mui/material";
import { Icon } from "@iconify/react"
import FloatingActionBox from "@/components/FloatingActionBox";

export default function TermsPage() {
    return (
        <>
            <Box
                minHeight={"100vh"}
                width={{ xs: "100%", sm: "60%" }}
                sx={{
                    p: 3,
                    backgroundColor: "#161c24",
                    color: "#ffffff",
                    mx: "auto"
                }}
            >
                <h1>Terms and Conditions for Tkurbx and TurkuNode Services</h1>

                <Stack spacing={3} sx={{ my: 3 }} textAlign="left">
                    <Box component="p" sx={{ fontWeight: 500, color: "text.secondary" }}>
                        Effective Date: <b>12 June 2025</b>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Introduction</h2>
                        <p>
                            These Terms and Conditions (Terms) govern the use of Tkurbx.com and its associated services, including the TurkuNode Discord bot (Bot) and any related agreements or legal relationships with Tkurbx (Owner). By using any of these Services, you (User) agree to be legally bound by these Terms.
                            <br />
                            Please read this document carefully.
                        </p>

                        <p>
                            <b>Tkurbx Services are provided by:</b>
                            <br />
                            Tkurbx
                        </p>

                        <p>
                            Contact email: <a href="mailto:hello@tkurbx.com" style={{ color: "#64B5F6", textDecoration: "underline" }}>
                                hello@tkurbx.com
                            </a>
                        </p>

                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Key Information at a Glance</h2>
                        <p>
                            These Terms apply to all Users unless otherwise explicitly stated.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Terms of Use</h2>
                        <p>Unless stated differently, the terms in this section apply generally to all use of Tkurbx.com and the TurkuNode Bot (Services). Additional or specific conditions may apply in certain situations and will be indicated where relevant.</p>

                        <p>By using these Services, you confirm that you meet the following requirements:</p>

                        <Stack component="ul" spacing={1.5} sx={{ pl: 3 }}>
                            <li>
                                There are no restrictions on your use of the Services based on whether you are a consumer or a business user.
                            </li>
                        </Stack>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Account Registration</h2>
                        <p>
                            To use certain Services, you might need to register or create a User account. You must provide all required information completely and truthfully. If you do not, the Service may not be available to you.
                        </p>

                        <p>
                            You are responsible for keeping your login credentials confidential and safe. You should choose strong passwords. By registering, you agree to be fully responsible for all activities that happen under your username. If you believe your personal information, including your User account or access credentials, has been compromised, unduly disclosed, or stolen, you must immediately and clearly inform the Owner via the contact details provided in this document.
                        </p>

                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Account Termination</h2>
                        <p>
                            You can terminate your account and stop using the Service at any time by using the account termination tools provided within the Application or by contacting us via the provided contact details.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Account Suspension and Deletion</h2>
                        <p>
                            The Owner reserves the right, at its sole discretion, to suspend or delete User accounts at any time and without notice if they are deemed inappropriate, offensive, or in violation of these Terms.
                        </p>
                        <p>
                            If your account is suspended or deleted, you are not entitled to any claims for compensation, damages, or reimbursement. Suspension or deletion of accounts due to your actions does not exempt you from paying any applicable fees or prices.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Content on Tkurbx and TurkuNode Services</h2>
                        <p>
                            Unless otherwise specified, all content available on Tkurbx.com and provided through the TurkuNode Bot is owned or provided by the Owner or its licensors.
                        </p>

                        <p>
                            The Owner makes every effort to ensure that the content provided does not infringe any applicable legal provisions or third-party rights. However, this may not always be possible. If you have complaints about content, you are encouraged to report them using the contact details provided in this document.
                        </p>

                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Rights Regarding Content – All Rights Reserved</h2>
                        <p>
                            The Owner holds and reserves all intellectual property rights for all content on these Services.
                        </p>
                        <p>
                            Therefore, you may not use such content in any way that is not necessary or implied for the proper use of the Service. Specifically, you may not copy, download, share (beyond limits specified), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer/assign to third parties, or create derivative works from the content available on these Services, nor allow any third party to do so through your account or device, even without your knowledge.
                        </p>
                        <p>
                            Where explicitly stated, you may download, copy, and/or share some content for your personal, non-commercial use, provided that all copyright and other attributions requested by the Owner are correctly implemented.
                        </p>
                        <p>
                            Any applicable statutory limitation or exception to copyright remains unaffected.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Access to External Resources</h2>
                        <p>
                            Through these Services, you may access external resources provided by third parties. You acknowledge and accept that the Owner has no control over such resources and is therefore not responsible for their content and availability.
                        </p>
                        <p>
                            Conditions for any third-party resources, including any rights granted in their content, are governed by those third parties’ terms and conditions, or by applicable statutory law if no such terms exist.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />
                    <Box>
                        <h2>Acceptable Use</h2>

                        <p>
                            Tkurbx.com and the TurkuNode Bot may only be used within the scope of their intended purpose, under these Terms and applicable law.

                        </p>
                        <p>
                            You are solely responsible for ensuring that your use of these Services does not violate any applicable law, regulations, or third-party rights.
                        </p>
                        <p>
                            The Owner reserves the right to take appropriate measures to protect its legitimate interests, including denying access to the Services, terminating accounts, or reporting misconduct to authorities (such as judicial or administrative authorities), if you engage or are suspected of engaging in any of the following activities:
                        </p>

                        <Stack component="ul" spacing={1.5} sx={{ pl: 3 }}>
                            <li>
                                Violating laws, regulations, and/or these Terms.
                            </li>
                            <li>
                                Infringing any third-party rights.
                            </li>
                            <li>
                                Significantly harming the Owner’s legitimate interests.
                            </li>
                            <li>
                                Offending the Owner or any third party.
                            </li>
                        </Stack>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>API Usage Terms</h2>
                        <p>
                            You may access data related to these Services via the Application Programming Interface (API). Any use of the API, including through a third-party product or service that accesses these Services, is bound by these Terms and, additionally, by the following specific terms:
                        </p>
                        <p>
                            You expressly understand and agree that the Owner bears no responsibility and will not be held liable for any damages or losses resulting from your use of the API or your use of any third-party products/services that access data through the API.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Liability and Indemnification</h2>
                        <h3>Disclaimer of Warranties</h3>
                        <p>
                            These Services are provided strictly on an “as is” and “as available” basis. Your use of the Service is at your own risk. To the maximum extent permitted by applicable law, the Owner expressly disclaims all conditions, representations, and warranties — whether express, implied, statutory, or otherwise, including, but not limited to, any implied warranty of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No advice or information, whether oral or written, obtained by you from the Owner or through the Services will create any warranty not expressly stated herein.
                        </p>
                        <p>
                            Without limiting the foregoing, the Owner, its subsidiaries, affiliates, licensors, officers, directors, agents, co-branders, partners, suppliers, and employees do not warrant that the content is accurate, reliable, or correct; that the Services will meet your requirements; that the Services will be available at any particular time or location, uninterrupted or secure; that any defects or errors will be corrected; or that the Services are free of viruses or other harmful components. Any content downloaded or otherwise obtained through the use of the Services is downloaded at your own risk, and you are solely responsible for any damage to your computer system or mobile device or loss of data that results from such download or your use of the Services.
                        </p>
                        <p>
                            The Owner does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Services or any hyperlinked website or service, and the Owner is not a party to or in any way monitors any transaction between you and third-party providers of products or services.
                        </p>
                        <p>
                            The Services may become inaccessible or may not function properly with your web browser, mobile device, and/or operating system. The Owner cannot be held liable for any perceived or actual damages arising from Service content, operation, or use of these Services.
                        </p>

                        <h3>Limitations of Liability</h3>
                        <p>
                            To the maximum extent permitted by applicable law, in no event will the Owner, and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees be liable for:
                        </p>

                        <Stack component="ul" spacing={1.5} sx={{ pl: 3 }}>
                            <li>
                                Any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, the Service; and
                            </li>
                            <li>
                                Any damage, loss, or injury resulting from hacking, tampering, or other unauthorised access or use of the Service or User account or the information contained therein;
                            </li>
                            <li>
                                Any errors, mistakes, or inaccuracies of content;
                            </li>
                            <li>
                                Personal injury or property damage, of any nature whatsoever, resulting from User access to or use of the Service;
                            </li>
                            <li>
                                Any unauthorised access to or use of the Owner’s secure servers and/or any and all personal information stored therein;
                            </li>
                            <li>
                                Any interruption or cessation of transmission to or from the Service;
                            </li>
                            <li>
                                Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service;
                            </li>
                            <li>
                                Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service; and/or
                            </li>
                            <li>
                                The defamatory, offensive, or illegal conduct of any User or third party. In no event will the Owner, and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees be liable for any claims, proceedings, liabilities, obligations, damages, losses, or costs in an amount exceeding the amount paid by User to the Owner hereunder in the preceding 12 months, or the period of duration of this agreement between the Owner and User, whichever is shorter.
                            </li>
                        </Stack>

                        <p>
                            This limitation of liability section applies to the fullest extent permitted by law in the applicable jurisdiction, whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if the company has been advised of the possibility of such damage.
                        </p>

                        <h3>Indemnification</h3>
                        <p>
                            You agree to defend, indemnify, and hold the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees harmless from and against any and all claims or demands, damages, obligations, losses, liabilities, costs or debt, and expenses, including, but not limited to, legal fees and expenses, arising from:
                        </p>

                        <Stack component="ul" spacing={1.5} sx={{ pl: 3 }}>
                            <li>
                                Your use of and access to the Service, including any data or content transmitted or received by you;
                            </li>
                            <li>
                                Your violation of these terms, including, but not limited to, your breach of any of the representations and warranties set forth in these terms;
                            </li>
                            <li>
                                Your violation of any third-party rights, including, but not limited to, any right of privacy or intellectual property rights;
                            </li>
                            <li>
                                Your violation of any statutory law, rule, or regulation;
                            </li>
                            <li>
                                Any content that is submitted from your account, including third-party access with your unique username or other security measure, if applicable, including, but not limited to, misleading, false, or inaccurate information;
                            </li>
                            <li>
                                Your wilful misconduct; or statutory provision by you or your affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees to the extent allowed by applicable law.
                            </li>
                        </Stack>

                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                    <Box>
                        <h2>Common Provisions</h2>
                        <h3>No Waiver</h3>
                        <p>
                            The Owner’s failure to assert any right or provision under these Terms does not mean a waiver of that right or provision. No waiver will be considered a further or continuing waiver of such term or any other term.
                        </p>

                        <h3>Service Interruption</h3>
                        <p>
                            To ensure the best possible service, the Owner reserves the right to interrupt the Service for maintenance, system updates, or any other changes, informing Users appropriately.
                        </p>
                        <p>
                            Within the limits of law, the Owner may also decide to suspend or terminate the Service altogether. If the Service is terminated, the Owner will cooperate with Users to enable them to withdraw Personal Data or information in accordance with applicable law.
                        </p>
                        <p>
                            Additionally, the Service might not be available due to reasons outside the Owner’s reasonable control, such as “force majeure” (e.g., labour actions, infrastructural breakdowns, or blackouts).
                        </p>

                        <h3>Service Reselling</h3>
                        <p>
                            You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of these Services without the Owner’s express prior written permission, granted either directly or through a legitimate reselling programme.
                        </p>

                        <h3>Privacy Policy</h3>
                        <p>
                            To learn more about the use of your Personal Data, please refer to the Privacy Policy of these Services.
                        </p>

                        <h3>Intellectual Property Rights</h3>
                        <p>
                            Without prejudice to any more specific provision of these Terms, any intellectual property rights, such as copyrights, trade mark rights, patent rights, and design rights related to these Services are the exclusive property of the Owner or its licensors and are protected by applicable laws or international treaties relating to intellectual property.
                        </p>
                        <p>
                            All trade marks — nominal or figurative — and all other marks, trade names, service marks, word marks, illustrations, images, or logos appearing in connection with these Services are, and remain, the exclusive property of the Owner or its licensors and are protected by applicable laws or international treaties related to intellectual property.
                        </p>

                        <h3>Changes to these Terms</h3>
                        <p>
                            The Owner reserves the right to amend or otherwise modify these Terms at any time. In such cases, the Owner will appropriately inform you of these changes.
                        </p>
                        <p>
                            Such changes will only affect the relationship with you for the future.
                        </p>
                        <p>
                            Your continued use of the Service will mean you accept the revised Terms. If you do not wish to be bound by the changes, you must stop using the Service. Failure to accept the revised Terms may entitle either party to terminate the Agreement.
                        </p>
                        <p>
                            The applicable previous version will govern the relationship prior to your acceptance. You can obtain any previous version from the Owner.
                        </p>
                        <p>
                            If required by applicable law, the Owner will specify the date by which the modified Terms will enter into force.
                        </p>

                        <h3>Assignment of Contract</h3>
                        <p>
                            The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms, taking your legitimate interests into account. Provisions regarding changes of these Terms will apply accordingly.
                        </p>
                        <p>
                            You may not assign or transfer your rights or obligations under these Terms in any way, without the written permission of the Owner.
                        </p>

                        <h3>Contacts</h3>
                        <p>
                            All communications relating to the use of these Services must be sent using the contact information stated in this document:{" "}
                            <a href="mailto:hello@tkurbx.com" style={{ color: "#64B5F6", textDecoration: "underline" }}>
                                hello@tkurbx.com
                            </a>.
                        </p>

                        <h3>Severability</h3>
                        <p>
                            Should any provision of these Terms be deemed or become invalid or unenforceable under applicable law, the invalidity or unenforceability of such provision will not affect the validity of the remaining provisions, which will remain in full force and effect. Any such invalid or unenforceable provision will be interpreted, construed, and reformed to the extent reasonably required to render it valid, enforceable, and consistent with its original intent. These Terms constitute the entire Agreement between Users and the Owner with respect to the subject matter hereof, and supersede all other communications, including but not limited to all prior agreements, between the parties with respect to such subject matter. These Terms will be enforced to the fullest extent permitted by law.
                        </p>

                        <h3>Governing Law and Venue of Jurisdiction</h3>
                        <p>
                            These Terms are governed by the laws applicable to the Owner's operations. The exclusive competence to decide on any controversy resulting from or connected to these Terms lies with the courts in the jurisdiction where the Owner is based.
                        </p>
                    </Box>

                    <Divider variant="middle" color="#E0E0E0" />

                </Stack>

            </Box>

            <FloatingActionBox>
                <Fab size="medium" variant="extended" color="primary" aria-label="contact" href="mailto:hello@tkurbx.com">
                    <Icon icon="simple-icons:maildotru" style={{ marginRight: 8 }} />
                    <b>Contact us</b>
                </Fab>
            </FloatingActionBox>
        </>
    );
}

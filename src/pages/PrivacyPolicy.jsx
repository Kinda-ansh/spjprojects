import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import LayoutWraper from "../layout/LayoutWraper";

const PrivacyPolicy = () => {
  return (
    <>
      <LayoutWraper>
        <div className="my-5">
          <h1 className="text-3xl text-center font-semibold">
            <span className="text-primary">Our Privacy and Policy</span>
          </h1>
          {/* <p className="text-lg text-center">
            Here is the latest top Answer Key, these Answer Key coming from
            sarkari result website.
          </p> */}
        </div>

        <div>
           <h2 className="py-5 text-xl">Introduction</h2>
           <p>Welcome to Sarkari Private Jobs. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
           </p>
           <h2 className="py-5 text-xl">Information We Collect</h2>
           <p>We collect personal information that you voluntarily provide to us when registering on the website, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us. The personal information we collect includes:</p>
          <li>Name</li><li>Email Address</li><li>Contact Number</li><li>Location</li><li>Date of Birth</li><li>Highest Qualification</li><li>Skills</li>


           {/* <h2 className="py-5 text-xl">Why do we use it?</h2> */}
           <p>Additionally, we may collect non-personal information about you automatically when you interact with our site. This information may include your IP address, browser type, the pages you visit on our site, the time and date of your visit, the time spent on those pages, and other diagnostic data. This helps us understand how our visitors use our site and enables us to enhance the user experience.
           </p>
           <h2 className="py-5 text-xl">How We Use Your Information.</h2>
           <p>We use the information we collect in the following ways : </p><br />
           <p>
          
              <li>To provide and manage our services: We may use your personal information to deliver the services you requested, including job alerts and notifications, and to manage your account.</li>
              <li>To improve our website: We continually strive to improve our website offerings based on the information and feedback we receive from you. This includes personalizing your experience by providing content that matches your preferences and job search criteria.</li>
              <li>To communicate with you: We may use your information to contact you about updates, marketing or promotional materials, and other information that may be of interest to you. You can opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</li>
              <li>To personalize user experience: We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site. This helps us tailor our content and services to meet the needs and interests of our users more effectively.</li>
              <li>To process transactions: We may use the information you provide about yourself when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
              <li>To enforce our terms, conditions, and policies: We may use your information to prevent illegal activities, protect our legal rights, and enforce our site policies and terms of service.</li>
            
           </p>


           <h2 className="py-5 text-xl">Sharing Your Information</h2>
           <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety. <br/><br/> Furthermore, we may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. We will provide notice before your personal information is transferred and becomes subject to a different privacy policy.</p>

           <h2 className="py-5 text-xl">Data Security</h2>
           <p>We use administrative, technical, and physical security measures to help protect your personal information. These measures include encrypted data storage, secure servers, and regular security audits. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. <br /><br />We also advise you to protect your own personal information by using strong passwords, avoiding sharing your login credentials, and logging out of your account after use, especially when using public or shared devices.</p>

           <h2 className="py-5 text-xl">Your Privacy Rights</h2>
           <p>Depending on the applicable laws in your region, you may have the right to access, update, or delete the personal information we collect. To exercise these rights, please contact us at <b>privacy@sarkariprivatejobs.com</b> . We will respond to your request within a reasonable timeframe and take the necessary steps to comply with your request as required by law. <br /><br />Additionally, you may have the right to object to the processing of your personal information, request restriction of processing, or request portability of your personal information. To exercise these additional rights, please contact us using the same email address provided above.</p>

           <h2 className="py-5 text-xl">Changes to This Privacy Policy</h2>
           <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. <br /><br />If we make any material changes to how we collect, use, or share your personal information, we will notify you either through the email address you have provided us or by placing a prominent notice on our website. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Privacy Policy and your agreement to abide and be bound by it.</p>
           <h2 className="py-5 text-xl">Contact Us</h2>
           <p className="pb-5 ">If you have any questions about this Privacy Policy, please contact us at : <b className="text-blue-500 cursor-pointer">privacy@sarkariprivatejobs.com</b></p>
            
        </div>

  
      </LayoutWraper>
    </>
  );
};

export default PrivacyPolicy;

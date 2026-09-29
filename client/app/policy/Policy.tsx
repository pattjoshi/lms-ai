
import React from "react";

import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Conditions
        </h1>

        <div className="text-[16px] font-Poppins leading-8">
          <p className="py-2">
            <strong>Last Updated: September 29, 2026</strong>
          </p>

          <p className="py-2">
            Welcome to our Learning Management Platform. These Terms and
            Conditions govern your access to and use of our website, learning
            services, courses, educational content, and related features.
            By creating an account or using our platform, you agree to comply
            with these terms. If you do not agree with any part of these terms,
            please do not use the platform.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            1. Use of the Platform
          </h2>

          <p className="py-2">
            Our platform provides online educational courses, lectures,
            learning materials, assessments, assignments, and other
            educational resources. You agree to use the platform only for
            lawful educational purposes and in accordance with these Terms and
            Conditions.
          </p>

          <p className="py-2">
            You must not use the platform in a way that could damage, disable,
            overburden, or interfere with the operation of the website or
            prevent other users from accessing and using the platform.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            2. User Accounts
          </h2>

          <p className="py-2">
            Some features of the platform require you to create an account.
            You are responsible for providing accurate and up-to-date
            information when registering.
          </p>

          <p className="py-2">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities performed through your
            account. You should notify us immediately if you believe your
            account has been accessed without authorization.
          </p>

          <p className="py-2">
            Accounts are intended for individual use. You must not share your
            account credentials with another person or allow another person to
            access paid courses through your account.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            3. Courses and Educational Content
          </h2>

          <p className="py-2">
            Course materials may include videos, documents, presentations,
            notes, quizzes, assignments, code examples, and other educational
            resources.
          </p>

          <p className="py-2">
            Course content is provided for educational purposes. While we make
            reasonable efforts to keep course information accurate and useful,
            educational content may be updated, modified, or replaced from
            time to time.
          </p>

          <p className="py-2">
            Access to a course does not give you ownership of the course
            materials. Your access is limited to the rights expressly granted
            to you through the platform.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            4. Payments and Course Purchases
          </h2>

          <p className="py-2">
            Certain courses and features may require payment. Prices,
            applicable taxes, and payment terms will be displayed before you
            complete a purchase.
          </p>

          <p className="py-2">
            Payments may be processed through third-party payment providers.
            By making a purchase, you authorize the applicable payment
            provider to process the transaction using the payment method you
            provide.
          </p>

          <p className="py-2">
            Once payment is successfully completed, access to the purchased
            course may be provided according to the course and subscription
            terms displayed at the time of purchase.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            5. Refund and Cancellation Policy
          </h2>

          <p className="py-2">
            Refund eligibility depends on the specific course, subscription,
            and refund terms displayed at the time of purchase.
          </p>

          <p className="py-2">
            If a refund option is available, you must submit your request
            within the applicable refund period. Refund requests may be
            reviewed based on course access, usage, and other applicable
            conditions.
          </p>

          <p className="py-2">
            Approved refunds will generally be processed through the original
            payment method, subject to the policies and processing times of
            the relevant payment provider.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            6. Intellectual Property
          </h2>

          <p className="py-2">
            All platform content, including course materials, videos,
            graphics, logos, text, software, designs, and other resources, is
            protected by applicable intellectual property laws.
          </p>

          <p className="py-2">
            You may access and use course materials only for your personal
            educational purposes unless we have provided written permission
            for another use.
          </p>

          <p className="py-2">
            You must not copy, reproduce, redistribute, sell, publish,
            upload, modify, record, or commercially exploit platform content
            without appropriate authorization.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            7. User-Generated Content
          </h2>

          <p className="py-2">
            Users may be able to submit questions, assignments, comments,
            feedback, or other content through the platform.
          </p>

          <p className="py-2">
            You are responsible for ensuring that content you submit does not
            violate applicable laws or the rights of others. You must not
            upload content that is abusive, misleading, unlawful,
            discriminatory, defamatory, or infringing upon another person's
            intellectual property rights.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            8. AI and Learning Assistant Features
          </h2>

          <p className="py-2">
            Our platform may provide AI-powered features such as document
            search, question answering, learning assistance, summaries, or
            recommendations.
          </p>

          <p className="py-2">
            AI-generated responses are intended to support learning and should
            not be considered a guaranteed or authoritative source of
            information. AI systems can occasionally generate incomplete,
            inaccurate, or outdated responses.
          </p>

          <p className="py-2">
            Users should verify important information against course materials,
            official documentation, or other reliable sources before relying
            on it.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            9. Prohibited Activities
          </h2>

          <p className="py-2">
            You agree not to:
          </p>

          <ul
            style={{
              listStyle: "disc",
              marginLeft: "30px",
            }}
            className="py-2"
          >
            <li>Share your account with other users.</li>
            <li>
              Download, reproduce, or distribute protected course materials
              without permission.
            </li>
            <li>
              Attempt to gain unauthorized access to the platform or another
              user's account.
            </li>
            <li>
              Introduce malicious software, viruses, or harmful code into the
              platform.
            </li>
            <li>
              Use automated systems to scrape or collect platform content
              without authorization.
            </li>
            <li>
              Attempt to bypass security, authentication, payment, or access
              controls.
            </li>
            <li>
              Use the platform for unlawful, fraudulent, or abusive purposes.
            </li>
          </ul>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            10. Course Certificates
          </h2>

          <p className="py-2">
            Where certificates are provided, eligibility may depend on
            completing the required course activities, assessments, or
            completion criteria.
          </p>

          <p className="py-2">
            A course certificate confirms completion of the applicable
            learning requirements. It does not represent an academic degree,
            professional license, employment guarantee, or accreditation
            unless explicitly stated by the platform or an authorized
            institution.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            11. Platform Availability
          </h2>

          <p className="py-2">
            We aim to keep the platform available and reliable, but we do not
            guarantee uninterrupted or error-free access. The platform may
            occasionally be unavailable because of maintenance, updates,
            technical issues, security incidents, or circumstances beyond our
            reasonable control.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            12. Account Suspension or Termination
          </h2>

          <p className="py-2">
            We may suspend or terminate an account if we reasonably believe
            that the user has violated these Terms and Conditions, engaged in
            fraudulent activity, misused the platform, or created a security
            or legal risk.
          </p>

          <p className="py-2">
            Users may also request account closure by contacting our support
            team. Certain information may need to be retained where required
            by law or for legitimate business purposes.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            13. Privacy
          </h2>

          <p className="py-2">
            Your use of the platform may involve the collection and processing
            of information necessary to provide our services, manage your
            account, process payments, improve the platform, and provide
            learning features.
          </p>

          <p className="py-2">
            Please review our Privacy Policy for information about how we
            collect, use, store, and protect personal information.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            14. Third-Party Services
          </h2>

          <p className="py-2">
            The platform may integrate with third-party services such as
            payment providers, authentication providers, video hosting
            services, cloud storage providers, analytics services, or AI
            providers.
          </p>

          <p className="py-2">
            Your use of third-party services may be subject to the respective
            provider's terms and privacy policies. We are not responsible for
            services or content controlled by independent third parties.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            15. Limitation of Liability
          </h2>

          <p className="py-2">
            To the extent permitted by applicable law, we will not be
            responsible for indirect, incidental, special, or consequential
            losses resulting from your use of, or inability to use, the
            platform.
          </p>

          <p className="py-2">
            We do not guarantee specific academic, professional, employment,
            examination, or financial outcomes from using our courses or
            educational services.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            16. Changes to These Terms
          </h2>

          <p className="py-2">
            We may update these Terms and Conditions from time to time to
            reflect changes to our services, technology, legal requirements,
            or business practices.
          </p>

          <p className="py-2">
            When material changes are made, we may provide an appropriate
            notice through the platform or other available communication
            channels. Your continued use of the platform after updated terms
            become effective constitutes acceptance of the revised terms,
            where permitted by applicable law.
          </p>

          <h2 className="text-[20px] font-semibold pt-5 pb-2">
            17. Contact Us
          </h2>

          <p className="py-2">
            If you have questions, concerns, or requests regarding these Terms
            and Conditions, please contact our support team through the contact
            information provided on the platform.
          </p>

          <p className="py-4">
            By using our LMS platform, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;


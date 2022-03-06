import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./OrgReview.css";

function OrgReview(props) {
    return (
        <div className="OrgReview">
            <div className="text-block-div">
                <h1>About the agency</h1>
                We are a team of young people passionate about transformation of the lives of fellow young people by providing
                opportunities for growth.
            </div>

            <div className="text-block-div">
                <h1>Introduction</h1>
                NetPlus Kenya is a registered empowerment agency founded by Cheryl Okumu and Margaret Lidoro working with a team
                of fellow young people from various career fields brought together by the vision projects we have whether structural
                establishments or new trend movements in our respective fields’.

                We realize that in order to achieve our vision projects we need to establish an array of connections to support
                us in terms of resources. We not only wish to do so for ourselves but also to help other youths advance in their
                respective fields through showcasing their skills and talents.
            </div>

            <div className="text-block-div">
                <h1>Mission</h1>
                A child and youth focused agency working towards skills and talent development, unity, social and economic
                empowerment through Advocacy, psychosocial support, sensitization, community outreaches, networking and educational support.
            </div>

            <div className="text-block-div">
                <h1>Objectives</h1>
                1.Enhance Career Development amongst the Youth.
                2.Promote skills and talent development amongst the Youth.
                3.Facilitate and promote Health and address social challenges facing the youth.
            </div>

            <div className="text-block-div">
                <h1> Goals</h1>
                Psychosocial Support
                We purpose to have series of activities towards development and implementation of school action plans on psychosocial support,
                follow up of under privileged children within the community and provision of counseling services.
            </div>

            <div className="text-block-div">
                <h1>Child protection</h1>
                Formation and training of child protection youth committees, church dialogue meetings and support to community led initiatives
                on child protection, translation of key legal and policy documents into local languages, data collection on
                violation of children’s rights and supporting talent development amongst Orphans and Vulnerable Children within Nairobi.
            </div>

            <div className="text-block-div">
                <h1>Livelihoods Support</h1>
                Provision of sustainable and profitable means of livelihoods, training of Income Generating Activities and financial management,
                support to Orphans and Vulnerable Children (OVCs’) to attain vocational skills and provision of basic start
                up tool kits to beneficiaries War affected children in the community.
            </div>

            <div className="text-block-div">
                <h1>Advocacy</h1>
                To address cross cutting issues that arise from the above core programs, messages are generated through Focused Child and
                Youth Friendly Support Group meetings.
            </div>

            <div className="text-block-div">
                <h1>Reproductive Health</h1>
                We purpose to do this through: Behavioral Change Communication (BCC), awareness and sensitization,
                guidance and counseling, distribution of Information Education and Communication materials through
                Schools and community outreaches
            </div>

        </div>
    )
}

export default OrgReview;
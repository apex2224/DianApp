import React from 'react';
import styles from './HireResourcesDropdown.module.css';

const developers = [
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/react_Native_16ed6c2eb7.svg', alt: 'reactNative.svg', title: 'React.JS Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/go_Developer_16b894902c.svg', alt: 'golangDeveloper.svg', title: 'Golang Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/node_Js_f485f2eaec.svg', alt: 'nodeJs.svg', title: 'Node.js Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/php_9d091f93e7.svg', alt: 'php.svg', title: 'PHP Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/vue_Js_72562de8a3.svg', alt: 'vueJs.svg', title: 'Vue.JS Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Frame_1597885118_7_4a917a6d24.svg', alt: 'rubyOnRails.svg', title: 'Ruby on Rails Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/ios_Developer_4bc5e5b048.svg', alt: 'iosDeveloper.svg', title: 'iOS Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/salesforce_Developer_0dfc536f5a.svg', alt: 'salesforceDeveloper.svg', title: 'Salesforce Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/react_Native_16ed6c2eb7.svg', alt: 'reactNative.svg', title: 'React Native Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/javascript_58a02b3882.svg', alt: 'javascript.svg', title: 'JavaScript Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/android_Developer_1706aa166b.svg', alt: 'androidDeveloper.svg', title: 'Android Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Frame_1597885119_3_89c0190878.svg', alt: 'python.svg', title: 'Python Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/flutter_Developer_9bfea1dfd6.svg', alt: 'flutterDeveloper.svg', title: 'Flutter Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Frame_1597885119_1_09fafd265e.svg', alt: 'angular.svg', title: 'Angular Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/java_b08a5efa8d.png', alt: 'java.png', title: 'Java Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/aws_Devops_Engineer_be3aa256e7.svg', alt: 'awsDevopsEngineer.svg', title: 'AWS Developer' },
    { icon: 'https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/ai_Developer_4fada0b506.svg', alt: 'aiDeveloper.svg', title: 'AI Developer' }
];

const HireResourcesDropdown = () => {
    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.dropdownHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.headerIconBox}>
                        <img src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/hire_Resources_8f5cb890c2.svg" alt="hireResources.svg" className={styles.headerIcon} />
                    </div>
                    <div className={styles.headerText}>
                        <div className={styles.headerTextBox}>
                            <p className={styles.headerTitle}>Hire Resources</p>
                            <img src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/right_Arrow_Without_Bg_b5e07419d9.svg" alt="dropdownIcon" className={styles.headerArrow} />
                        </div>
                        <p className={styles.headerSubtitle}>Flexible hiring models to scale your development team.</p>
                    </div>
                </div>
            </div>
            <div className={styles.dropdownContent}>
                <div className={styles.dropdownContentBox}>
                    {developers.map((dev, index) => (
                        <div className={styles.dropdownItemBox} key={index}>
                            <div className={styles.dropdownItem}>
                                <div className={styles.itemContentIconBox}>
                                    <img src={dev.icon} alt={dev.alt} style={{width: '24px', height: '24px'}} />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemContentTitleBox}>
                                        <p className={styles.itemTitle}>{dev.title}</p>
                                        <img src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/right_Arrow_Without_Bg_b5e07419d9.svg" alt="dropdownIcon" className={styles.contentArrow} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HireResourcesDropdown;

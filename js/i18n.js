// Internationalization

export const LANGUAGES = {
    EN: "en",
    AR: "ar"
};

export function normalizeLanguage(
    language
) {
    return language === LANGUAGES.AR
        ? LANGUAGES.AR
        : LANGUAGES.EN;
}

const translations = {
    en: {
        common: {
            home: "Home",
            about: "About",
            journal: "Journal",
            faq: "FAQ",
            shop: "Shop",
            contact: "Contact",
            signIn: "Sign In",
            account: "Account",
            cart: "Cart",
            myAccount: "My Account",
            bookTable: "Book a Table",
            logout: "Log Out",
            saveChanges: "Save Changes",
            language: "Language",
            appearance: "Appearance",
            dark: "Dark",
            light: "Light"
        },

        auth: {
            signUpEyebrow: "JOIN OUR COMMUNITY",
            signUpTitle: "Create Your Account",
            signUpDescription:
                "Create an account and make every coffee experience a little more personal.",

            signInEyebrow: "WELCOME BACK",
            signInTitle: "Sign In",
            signInDescription:
                "Sign in to continue your coffee experience with us.",

            fullName: "Full Name",
            emailAddress: "Email Address",
            password: "Password",
            confirmPassword: "Confirm Password",

            namePlaceholder:
                "Enter your full name",

            emailPlaceholder:
                "Enter your email",

            createPassword:
                "Create a password",

            enterPassword:
                "Enter your password",

            confirmPasswordPlaceholder:
                "Confirm your password",

            passwordHint:
                "Use at least 8 characters.",

            createAccount:
                "Create Account",

            signingIn:
                "Signing In...",

            creatingAccount:
                "Creating Account...",

            alreadyHaveAccount:
                "Already have an account?",

            doNotHaveAccount:
                "Don't have an account?",

            createAccountLink:
                "Create Account",

            rememberMe:
                "Remember me",

            forgotPassword:
                "Forgot Password?"
        },

        account: {
            eyebrow: "YOUR COFFEE SPACE",

            title: "My Account",

            description:
                "Manage your profile and personal preferences.",

            profile:
                "PROFILE",

            personalInformation:
                "Personal Information",

            changePhoto:
                "Change Photo",

            remove:
                "Remove",

            avatarHint:
                "JPG, PNG or WebP. Max 2 MB.",

            emailHelp:
                "Email changes will be supported later.",

            preferences:
                "PREFERENCES",

            personalize:
                "Personalize Your Experience",

            languageDescription:
                "Choose your preferred language.",

            appearanceDescription:
                "Choose how the website looks.",

            accountUpdated:
                "Your account has been updated successfully.",

            saveError:
                "Unable to save your changes. Please try again."
        },

        validation: {
            nameRequired:
                "Please enter your full name.",

            nameTooShort:
                "Your name must be at least 2 characters.",

            emailRequired:
                "Please enter your email address.",

            invalidEmail:
                "Please enter a valid email address.",

            passwordRequired:
                "Please enter a password.",

            passwordTooShort:
                "Password must be at least 8 characters.",

            confirmPasswordRequired:
                "Please confirm your password.",

            passwordsDoNotMatch:
                "Passwords do not match.",

            emailExists:
                "An account with this email already exists.",

            invalidCredentials:
                "The email or password is incorrect.",

            genericError:
                "Something went wrong. Please try again.",

            invalidImage:
                "Please select a valid image.",

            imageTooLarge:
                "Image size must be 2 MB or less.",

            imageReadError:
                "Unable to read the selected image."
        },

        shop: {
            title: "Shop",

            description:
                "Explore our coffee, cold brew, decaf, and merchandise.",

            filters: "Filters",

            reset: "Reset",

            categories: "Categories",

            priceRange: "Price Range",

            min: "Min",

            max: "Max",

            minPrice: "Min price",

            maxPrice: "Max price",

            applyFilters: "Apply Filters",

            sortBy: "Sort By:",

            price: "Price",

            latest: "Latest",

            rating: "Rating",

            order: "Order:",

            ascending: "Ascending",

            descending: "Descending",

            previous: "Previous",

            next: "Next",

            priceUnavailable:
                "Price unavailable",

            invalidPrices:
                "Please enter valid prices.",

            invalidPriceRange:
                "Minimum price cannot be greater than maximum price.",

            noProductsFoundTitle:
                "No Products Found",

            noProductsFoundDescription:
                "Try changing your filters or resetting the search.",

            noProductsFoundCount:
                "No products found",

            showingProducts:
                "Showing {start}–{end} of {total} products",

            ratingAria:
                "Rating {rating} out of 5",

            productPagination:
                "Product pagination",

            categoryNames: {
                coffee: "Coffee",

                decaf: "Decaf",

                "cold-brew": "Cold Brew",

                "hot-drinks": "Hot Drinks",

                tea: "Tea",

                merchandise: "Merchandise"
            }
        },

        product: {
            size: "Size",

            type: "Type",

            quantity: "Quantity",

            decreaseQuantity:
                "Decrease quantity",

            increaseQuantity:
                "Increase quantity",

            selectOptions:
                "Select Options",

            addToCart:
                "Add to Cart",

            addedToCart:
                "Added to Cart ✓",

            selectOptionsToViewPrice:
                "Select your options to view the price.",

            combinationUnavailable:
                "This combination is unavailable.",

            priceUnavailable:
                "Price unavailable",

            writeReview:
                "Write a Review",

            yourName:
                "Your Name",

            yourRating:
                "Your Rating",

            yourReview:
                "Your Review",

            reviewNamePlaceholder:
                "Enter your name",

            reviewCommentPlaceholder:
                "Share your experience...",

            submitReview:
                "Submit Review",

            rateOutOf5:
                "Rate {rating} out of 5",

            customerReviews:
                "Customer Reviews",

            noReviewsYet:
                "No reviews yet",

            beFirstToReview:
                "Be the first to review this product.",

            review:
                "review",

            reviews:
                "reviews",

            ratingAria:
                "Rating {rating} out of 5",

            reviewNameLength:
                "Name must be between 2 and 50 characters.",

            selectRating:
                "Please select a rating.",

            reviewCommentLength:
                "Review must be between 5 and 500 characters.",

            reviewAdded:
                "Your review was added successfully.",

            youMayAlsoLike:
                "You May Also Like",

            moreCategory:
                "More {category}",

            sameCategoryDescription:
                "Discover more products from the same category.",

            notFound:
                "Product Not Found",

            notFoundDescription:
                "The product you're looking for does not exist.",

            backToShop:
                "Back to Shop",

            typeNames: {
                "whole-bean": "Whole Bean",
                ground: "Ground",
                original: "Original",
                vanilla: "Vanilla",
                caramel: "Caramel",
                classic: "Classic",
                chocolate: "Chocolate",
                black: "Black",
                cream: "Cream",
                glass: "Glass"
            }
        },

        footer: {
            about: "About",

            company: "Company",

            locations: "Locations",

            followAlong: "Follow Along",

            allRightsReserved:
                "All Rights Reserved.",

            tagline:
                "Because We Love Coffee"
        },
        meta: {
            signInTitle:
                "Sign In | Coffee Shop",

            signUpTitle:
                "Create Account | Coffee Shop",

            accountTitle:
                "My Account | Coffee Shop",
            shopTitle:
                "Coffee Shop ☕ | Shop",

            productTitle:
                "Coffee Shop ☕ | Product"
        }
    },

    ar: {
        common: {
            home: "الرئيسية",
            about: "من نحن",
            journal: "المجلة",
            faq: "الأسئلة الشائعة",
            shop: "المتجر",
            contact: "تواصل معنا",
            signIn: "تسجيل الدخول",
            account: "الحساب",
            cart: "السلة",
            myAccount: "حسابي",
            bookTable: "احجز طاولة",
            logout: "تسجيل الخروج",
            saveChanges: "حفظ التغييرات",
            language: "اللغة",
            appearance: "المظهر",
            dark: "داكن",
            light: "فاتح"
        },

        auth: {
            signUpEyebrow: "انضم إلى مجتمعنا",
            signUpTitle: "أنشئ حسابك",
            signUpDescription:
                "أنشئ حسابًا واجعل كل تجربة قهوة أكثر خصوصية.",

            signInEyebrow: "مرحبًا بعودتك",
            signInTitle: "تسجيل الدخول",
            signInDescription:
                "سجّل الدخول لمواصلة تجربة القهوة معنا.",

            fullName: "الاسم الكامل",
            emailAddress: "البريد الإلكتروني",
            password: "كلمة المرور",
            confirmPassword: "تأكيد كلمة المرور",

            namePlaceholder:
                "أدخل اسمك الكامل",

            emailPlaceholder:
                "أدخل بريدك الإلكتروني",

            createPassword:
                "أنشئ كلمة مرور",

            enterPassword:
                "أدخل كلمة المرور",

            confirmPasswordPlaceholder:
                "أكد كلمة المرور",

            passwordHint:
                "استخدم 8 أحرف على الأقل.",

            createAccount:
                "إنشاء الحساب",

            signingIn:
                "جارٍ تسجيل الدخول...",

            creatingAccount:
                "جارٍ إنشاء الحساب...",

            alreadyHaveAccount:
                "لديك حساب بالفعل؟",

            doNotHaveAccount:
                "ليس لديك حساب؟",

            createAccountLink:
                "إنشاء حساب",

            rememberMe:
                "تذكرني",

            forgotPassword:
                "نسيت كلمة المرور؟"
        },

        account: {
            eyebrow: "مساحتك الخاصة",

            title: "حسابي",

            description:
                "إدارة ملفك الشخصي وتفضيلاتك الشخصية.",

            profile:
                "الملف الشخصي",

            personalInformation:
                "المعلومات الشخصية",

            changePhoto:
                "تغيير الصورة",

            remove:
                "إزالة",

            avatarHint:
                "JPG أو PNG أو WebP. الحد الأقصى 2 MB.",

            emailHelp:
                "سيتم دعم تغيير البريد الإلكتروني لاحقًا.",

            preferences:
                "التفضيلات",

            personalize:
                "خصص تجربتك",

            languageDescription:
                "اختر اللغة المفضلة لديك.",

            appearanceDescription:
                "اختر مظهر الموقع.",

            accountUpdated:
                "تم تحديث حسابك بنجاح.",

            saveError:
                "تعذر حفظ التغييرات. حاول مرة أخرى."
        },

        validation: {
            nameRequired:
                "من فضلك أدخل اسمك الكامل.",

            nameTooShort:
                "يجب أن يحتوي الاسم على حرفين على الأقل.",

            emailRequired:
                "من فضلك أدخل بريدك الإلكتروني.",

            invalidEmail:
                "من فضلك أدخل بريدًا إلكترونيًا صحيحًا.",

            passwordRequired:
                "من فضلك أدخل كلمة المرور.",

            passwordTooShort:
                "يجب أن تكون كلمة المرور 8 أحرف على الأقل.",

            confirmPasswordRequired:
                "من فضلك أكد كلمة المرور.",

            passwordsDoNotMatch:
                "كلمتا المرور غير متطابقتين.",

            emailExists:
                "يوجد حساب بالفعل بهذا البريد الإلكتروني.",

            invalidCredentials:
                "البريد الإلكتروني أو كلمة المرور غير صحيحة.",

            genericError:
                "حدث خطأ ما. حاول مرة أخرى.",

            invalidImage:
                "من فضلك اختر صورة صحيحة.",

            imageTooLarge:
                "يجب ألا يتجاوز حجم الصورة 2 MB.",

            imageReadError:
                "تعذر قراءة الصورة المحددة."
        },
        shop: {
            title: "المتجر",

            description:
                "استكشف القهوة والقهوة الباردة والقهوة منزوعة الكافيين ومنتجاتنا.",

            filters: "الفلاتر",

            reset: "إعادة ضبط",

            categories: "التصنيفات",

            priceRange: "نطاق السعر",

            min: "من",

            max: "إلى",

            minPrice: "الحد الأدنى للسعر",

            maxPrice: "الحد الأقصى للسعر",

            applyFilters: "تطبيق الفلاتر",

            sortBy: "ترتيب حسب:",

            price: "السعر",

            latest: "الأحدث",

            rating: "التقييم",

            order: "الترتيب:",

            ascending: "تصاعدي",

            descending: "تنازلي",

            previous: "السابق",

            next: "التالي",

            priceUnavailable:
                "السعر غير متاح",

            invalidPrices:
                "من فضلك أدخل أسعارًا صحيحة.",

            invalidPriceRange:
                "لا يمكن أن يكون الحد الأدنى للسعر أكبر من الحد الأقصى.",

            noProductsFoundTitle:
                "لم يتم العثور على منتجات",

            noProductsFoundDescription:
                "حاول تغيير الفلاتر أو إعادة ضبط البحث.",

            noProductsFoundCount:
                "لم يتم العثور على منتجات",

            showingProducts:
                "عرض {start}–{end} من أصل {total} منتجًا",

            ratingAria:
                "التقييم {rating} من 5",

            productPagination:
                "صفحات المنتجات",

            categoryNames: {
                coffee: "قهوة",

                decaf: "قهوة منزوعة الكافيين",

                "cold-brew": "قهوة باردة",

                "hot-drinks": "مشروبات ساخنة",

                tea: "شاي",

                merchandise: "منتجات"
            }
        },
        product: {
            size: "الحجم",

            type: "النوع",

            quantity: "الكمية",

            decreaseQuantity:
                "تقليل الكمية",

            increaseQuantity:
                "زيادة الكمية",

            selectOptions:
                "اختر الخيارات",

            addToCart:
                "أضف إلى السلة",

            addedToCart:
                "تمت الإضافة إلى السلة ✓",

            selectOptionsToViewPrice:
                "اختر الخيارات لعرض السعر.",

            combinationUnavailable:
                "هذا الاختيار غير متاح.",

            priceUnavailable:
                "السعر غير متاح",

            writeReview:
                "اكتب تقييمًا",

            yourName:
                "اسمك",

            yourRating:
                "تقييمك",

            yourReview:
                "مراجعتك",

            reviewNamePlaceholder:
                "أدخل اسمك",

            reviewCommentPlaceholder:
                "شاركنا تجربتك...",

            submitReview:
                "إرسال التقييم",

            rateOutOf5:
                "قيّم {rating} من 5",

            customerReviews:
                "تقييمات العملاء",

            noReviewsYet:
                "لا توجد تقييمات بعد",

            beFirstToReview:
                "كن أول من يقيّم هذا المنتج.",

            review:
                "تقييم",

            reviews:
                "تقييمات",

            ratingAria:
                "التقييم {rating} من 5",

            reviewNameLength:
                "يجب أن يكون الاسم بين حرفين و50 حرفًا.",

            selectRating:
                "من فضلك اختر تقييمًا.",

            reviewCommentLength:
                "يجب أن تكون المراجعة بين 5 و500 حرف.",

            reviewAdded:
                "تمت إضافة تقييمك بنجاح.",

            youMayAlsoLike:
                "قد يعجبك أيضًا",

            moreCategory:
                "المزيد من {category}",

            sameCategoryDescription:
                "اكتشف المزيد من المنتجات من نفس التصنيف.",

            notFound:
                "المنتج غير موجود",

            notFoundDescription:
                "المنتج الذي تبحث عنه غير موجود.",

            backToShop:
                "العودة إلى المتجر",

            typeNames: {
                "whole-bean": "حبوب كاملة",
                ground: "مطحونة",
                original: "أصلية",
                vanilla: "فانيليا",
                caramel: "كراميل",
                classic: "كلاسيكية",
                chocolate: "شوكولاتة",
                black: "أسود",
                cream: "كريمي",
                glass: "زجاج"
            }
        },

        footer: {
            about: "من نحن",

            company: "الشركة",

            locations: "المواقع",

            followAlong: "تابعنا",

            allRightsReserved:
                "جميع الحقوق محفوظة.",

            tagline:
                "لأننا نحب القهوة"
        },

        meta: {
            signInTitle:
                "تسجيل الدخول | Coffee Shop",

            signUpTitle:
                "إنشاء حساب | Coffee Shop",

            accountTitle:
                "حسابي | Coffee Shop",

            shopTitle:
                "Coffee Shop ☕ | المتجر",

            productTitle:
                "Coffee Shop ☕ | المنتج"
        }
    }
};

// Get Translation

export function t(
    key,
    language = LANGUAGES.EN
) {
    const normalizedLanguage =
        normalizeLanguage(language);

    const keys =
        key.split(".");

    let value =
        translations[
        normalizedLanguage
        ];

    for (const currentKey of keys) {
        if (
            value === null ||
            value === undefined
        ) {
            return key;
        }

        value =
            value[currentKey];
    }

    return typeof value === "string"
        ? value
        : key;
}


// Apply Language

export function applyLanguage(
    language
) {
    const normalizedLanguage =
        normalizeLanguage(language);

    const isArabic =
        normalizedLanguage ===
        LANGUAGES.AR;

    document.documentElement.lang =
        normalizedLanguage;

    document.documentElement.dir =
        isArabic
            ? "rtl"
            : "ltr";

    // Translate Text

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {
            element.textContent =
                t(
                    element.dataset.i18n,
                    normalizedLanguage
                );
        });

    // Translate Placeholders

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(element => {
            element.placeholder =
                t(
                    element.dataset
                        .i18nPlaceholder,
                    normalizedLanguage
                );
        });

    // Translate aria-label

    document
        .querySelectorAll(
            "[data-i18n-aria-label]"
        )
        .forEach(element => {
            element.setAttribute(
                "aria-label",
                t(
                    element.dataset
                        .i18nAriaLabel,
                    normalizedLanguage
                )
            );
        });

    // Translate Titles

    document
        .querySelectorAll(
            "[data-i18n-title]"
        )
        .forEach(element => {
            element.setAttribute(
                "title",
                t(
                    element.dataset
                        .i18nTitle,
                    normalizedLanguage
                )
            );
        });

    // Translate Document Title

    const titleElement =
        document.querySelector(
            "title[data-i18n]"
        );

    if (titleElement) {
        titleElement.textContent =
            t(
                titleElement.dataset.i18n,
                normalizedLanguage
            );
    }

    return normalizedLanguage;
}
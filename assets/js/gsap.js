window.addEventListener('load', function () {
    if (window.innerWidth >= 769) {
        const tl = gsap.timeline({
            defaults: { ease: "power2.out" }
        });

        tl.set(".intro__bg", {
            scale: 1.2,
            opacity: 0
        })
            .to(".intro__bg", {
                scale: 1,
                opacity: 1,
                duration: 1.5
            })
            .to(".intro__bg", {
                scale: 1.2,
                y: 50,
                scrollTrigger: {
                    trigger: ".intro",
                    start: "top top",
                    endTrigger: ".intro",
                    end: "bottom top",
                    scrub: 0.2,
                }
            })
            .to(".intro__wrap", {
                y: -150,
                scrollTrigger: {
                    trigger: ".intro",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            })
            .to(".intro .logo", {
                scale: 1.2,
                scrollTrigger: {
                    trigger: ".intro",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            })
            .to(".intro__content", {
                scale: 1.2,
                scrollTrigger: {
                    trigger: ".intro",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".start-sales",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

        gsap.fromTo(".start-sales__title",
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".start-sales__title",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            }

        );

        gsap.fromTo(".start-sales__text",
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".start-sales__text",
                    start: "top 90%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(".start-sales form .form__item",
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".start-sales form .form__item",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(".start-sales form button",
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".start-sales form button",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(".about__title",
            {
                opacity: 0,
                scale: 1.3,
                y: 50
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about__title",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about__main",
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none play reverse",
            }
        });

        gsap.utils.toArray(".about__item").forEach((item, index) => {
            tl3.fromTo(item,
                {
                    x: window.innerWidth
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                },
                "-=0.6"
            );
        });

        gsap.fromTo(".invitation__right img",
            {
                scale: 1.5
            },
            {
                duration: 2,
                scale: 1,
                scrollTrigger: {
                    trigger: ".invitation__wrap",
                    start: "top 70%",
                    end: "top 40%",
                    toggleActions: "play none play reverse",
                }
            }
        );


        const tlLeft = gsap.timeline({
            scrollTrigger: {
                trigger: ".invitation__container",
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none play reverse",
            }
        });

        tlLeft.fromTo(".invitation__title",
            {
                x: "-100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        )
            .fromTo(".invitation__subtitle",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.5"
            )
            .fromTo(".invitation form",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.5"
            );

        gsap.fromTo(".gallery__slider .gallery__item.slick-center .gallery__item__name",
            {
                opacity: 0,
                y: 50
            },
            {
                duration: 1,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".gallery",
                    start: "top 60%",
                    end: "top 40%",
                    toggleActions: "play none play reverse",
                }
            }
        );
        gsap.fromTo(".gallery__slider2",
            {
                opacity: 0,
                y: 50
            },
            {
                duration: 1,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".gallery__slider2",
                    start: "top 95%",
                    end: "top 10%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".territory",
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none play reverse",
            }
        });

        tl5.fromTo(".territory__title",
            {
                x: "-100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        )
            .fromTo(".territory__descr",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=1"
            )
        gsap.fromTo(".territory__right",
            {
                y: "50",
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".territory",
                    start: "top 70%",
                    end: "top 50%",
                    toggleActions: "play none play reverse",
                }
            },
        )

        gsap.fromTo(".territory__bg",
            {
                scale: 1.5
            },
            {
                scale: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".territory",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )

        gsap.fromTo(".general-plan__title",
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".general-plan",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".general-plan__information",
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".general-plan",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )

        gsap.fromTo(".development__slider2",
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".development",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".developmentslider-info",
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".development",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".development__slider",
            {
                x: '100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".development",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".development__button",
            {
                x: '100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 1.9,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".development",
                    start: "top 30%",
                    end: "top 10%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".development__title",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".development",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none play reverse",
                }
            },
        )

        gsap.fromTo(".advantages__slider2",
            {
                x: '100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".advantages",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".advantages__right .slider-info",
            {
                x: '100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".advantages",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".advantages__right .advantages__button",
            {
                x: '100%',
                opacity: 0,
            },
            {
                x: '0',
                opacity: 1,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".advantages",
                    start: "top 40%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".advantages__slider",
            {
                scale: 0.8,
                x: '-100%',
                opacity: 0,
            },
            {
                scale: 1,
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".advantages",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        gsap.fromTo(".advantages__slider",
            {
                scale: 1,
                x: '-100%',
                opacity: 0,
            },
            {
                scale: 1,
                x: '0',
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".advantages",
                    start: "top 50%",
                    end: "top 30%",
                    toggleActions: "play none play reverse",
                }
            },
        )
        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".infrastructure",
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none play reverse",
            }
        });

        tl6.fromTo(".infrastructure__title",
            {
                x: "-100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        )
            .fromTo(".infrastructure__descr",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out"
                },
                "-=0.9"
            )


        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".infrastructure__content",
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none play reverse",
            }
        });

        gsap.utils.toArray(".infrastructure__item").forEach((item, index) => {
            tl4.fromTo(item,
                {
                    x: '-100%',
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: index * 0.2
                },
                "-=1"
            );
        });

        const tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: ".landscape",
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none play reverse",
            }
        });

        tl7.fromTo(".landscape__title",
            {
                x: "-100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }
        )
            .fromTo(".landscape__descr",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.5"
            )
            .fromTo(".landscape__item",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.5"
            )

        gsap.fromTo(".landscape__right img",
            {
                scale: 1.5,
            },
            {
                scale: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".landscape",
                    start: "top 70%",
                    end: "top 50%",
                    toggleActions: "play none play reverse",
                }
            },
        )

        const tl8 = gsap.timeline({
            scrollTrigger: {
                trigger: ".seas",
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none play reverse",
            }
        });

        tl8.fromTo(".seas__title",
            {
                x: "-100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }
        )
            .fromTo(".seas__descr",
                {
                    x: "-100%",
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.5"
            );

        const tl9 = gsap.timeline({
            scrollTrigger: {
                trigger: ".seas",
                start: "top 70%",
                end: "top 50%",
                toggleActions: "play none play reverse",
            }
        });
        tl9.fromTo(".seas__top__map",
            {
                x: "100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out"
            }
        )
            .fromTo(".map__poin__item",
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.2
                },
                "-=1"
            );
        const tl10 = gsap.timeline({
            scrollTrigger: {
                trigger: ".seas",
                start: "top 20%",
                end: "top 0%",
                toggleActions: "play none play reverse",
            }
        });

        tl10.fromTo(".seas__bottom__item:nth-child(1), .seas__bottom__item:nth-child(2)",
            {
                x: "-100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2
            }
        );

        tl10.fromTo(".seas__bottom__item:nth-child(3), .seas__bottom__item:nth-child(4)",
            {
                x: "100%",
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2
            },
            0
        );

        const tlFeedback = gsap.timeline({
            scrollTrigger: {
                trigger: ".feedback",
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
            }
        });

        tlFeedback.fromTo(".feedback__title",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }
        )
            .fromTo(".feedback__descr",
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.6"
            )
            .fromTo(".feedback form .form__item",
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.2
                },
                "-=0.6"
            )
            .fromTo(".feedback form .custom-checkbox",
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.6"
            )
            .fromTo(".feedback form button",
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.6"
            );
    }

});